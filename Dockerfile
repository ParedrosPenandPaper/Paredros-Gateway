FROM node:10.6-alpine

WORKDIR /usr/src/app

RUN npm install express
COPY dist/ .
COPY server.js .

EXPOSE 80

CMD [ "node", "server.js" ]
