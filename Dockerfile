FROM php:apache

WORKDIR /var/www/html

COPY . .

ENV VIRTUAL_HOST=marshtree.jacobrswanson.com,www.marshtree.jacobrswanson.com
ENV VIRTUAL_PORT=80
ENV LETSENCRYPT_HOST=marshtree.jacobrswanson.com
ENV LETSENCRYPT_EMAIL=jrs40492@gmail.com

EXPOSE 80