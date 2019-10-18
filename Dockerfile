FROM node:10.6-alpine

EXPOSE 80

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app
COPY . .
RUN ls -la

RUN npm install
RUN ls -la

RUN npm run build
RUN ls -la

CMD [ "node", "server.js" ]
