FROM ubuntu:14.04

RUN apt-get update

# setup timezone
RUN echo "Asia/Tokyo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

# add locale
RUN apt-get install -y locales \
    && locale-gen ja_JP.UTF-8 \
    && dpkg-reconfigure locales

RUN    apt-get install -y software-properties-common
RUN    add-apt-repository -y ppa:chris-lea/node.js
RUN    echo "deb http://archive.ubuntu.com/ubuntu precise universe" >> /etc/apt/sources.list
RUN    apt-get update
RUN    apt-get install -y nodejs

# App
ADD ./src/service /src/service
ADD ./src/angular/app /src/angular/app

# Install app dependencies
RUN cd /src/service; npm install

EXPOSE  8080
CMD ["node", "/src/service/index.js"]

