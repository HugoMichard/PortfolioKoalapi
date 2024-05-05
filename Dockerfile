# Use an official Node.js runtime as the base image
FROM node:18.19-alpine

WORKDIR /app

RUN apk update && apk add --no-cache git && apk add g++ make py3-pip

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]