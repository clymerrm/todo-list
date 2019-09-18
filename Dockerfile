FROM node:12.2.0-alpine

WORKDIR /app

COPY . /app

RUN npm install --silent

CMD npm run start
