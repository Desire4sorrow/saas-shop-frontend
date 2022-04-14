FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g http-server
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ] 

FROM quay.io/keycloak/keycloak:latest as builder

ENV KC_METRICS_ENABLED=true
ENV KC_FEATURES=token-exchange
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/lib/quarkus/ /opt/keycloak/lib/quarkus/
WORKDIR /opt/keycloak
# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=change_me
# change these values to point to a running postgres instance
ENV KC_DB_URL=jdbc:postgresql://testvm.plotpad.ru/main?currentSchema=keycloack_schema
ENV KC_DB_USERNAME=postgres
ENV KC_DB_PASSWORD=postgres
ENV KC_HOSTNAME=testvm.plotpad.ru
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]
