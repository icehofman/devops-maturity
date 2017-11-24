FROM node:8.9.1-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g @angular/cli
RUN npm install

COPY . /usr/src/app
RUN ng build

EXPOSE 4200

CMD [ "ng", "serve" ]