FROM nginx:alpine

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/

RUN rm -rf html

RUN mkdir html

COPY ./dist/angular-app /usr/share/nginx/html

EXPOSE 80
