FROM jwilder/nginx-proxy:alpine

COPY It-projekt19-6.informatik.fh-nuernberg.de.conf etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
