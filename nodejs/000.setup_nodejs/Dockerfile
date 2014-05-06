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


