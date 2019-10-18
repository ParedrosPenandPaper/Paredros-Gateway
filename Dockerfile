FROM node:10.6-alpine

WORKDIR /usr/src/app

COPY src/dist/ .
COPY src/server.js .

EXPOSE 80

CMD [ "node", "server.js" ]
