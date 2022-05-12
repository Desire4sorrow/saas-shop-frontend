FROM node:lts-alpine
EXPOSE 8080

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm i
RUN npm install -g http-server

COPY . /app

RUN npm run build

# CMD ["npm", "run", "serve"]
CMD ["npm", "run", "docker-dev"]
# CMD ["http-server", "dist"]
