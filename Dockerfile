FROM node:10.6-alpine

WORKDIR /usr/src/app

COPY dist/ .
COPY server/ .

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "start" ]
