FROM node:lts-alpine

WORKDIR /server

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY ./build ./build

EXPOSE 3000

CMD ["npm", "start"]