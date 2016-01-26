FROM node:0.10

MAINTAINER tktk8924 <myphone.tk@gmail.com>

WORKDIR /app
COPY ./ .

RUN npm install
RUN node_modules/.bin/bower --allow-root install

EXPOSE 8000
CMD npm start
