FROM node:15.9.0-alpine AS app

WORKDIR /app/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install