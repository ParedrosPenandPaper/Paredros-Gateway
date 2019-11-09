FROM jwilder/nginx-proxy:alpine

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/
