FROM node:10.6-alpine

WORKDIR /usr/src/app

COPY dist/ .
COPY server.js .

EXPOSE 80

CMD [ "node", "server.js" ]
