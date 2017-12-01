FROM node:8.9.1-alpine

COPY maturity.json ./
RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "--watch", "maturity.json"]
