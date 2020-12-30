# FROM nginx:alpine

FROM nginx:1.14.0-alpine

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/

WORKDIR /usr/share/nginx/

RUN rm -rf html

RUN mkdir html

COPY ./dist/angular-app /usr/share/nginx/html

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]