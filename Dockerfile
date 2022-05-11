FROM node:lts-alpine
EXPOSE 8080

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm i
# RUN npm install -g http-server

COPY . /app

CMD ["npm", "run", "serve"]
# CMD ["http-server", "dist"]
