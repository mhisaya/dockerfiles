FROM ubuntu:latest
RUN apt-get update

RUN echo "Asia/Tokyo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

#RUN apt-get install -y locales \
#    && echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen \
#    && locale-gen ja_JP.UTF-8 \
#    && update-locale LANG=ja_JP.UTF-8 \
#    && . /etc/default/locale

RUN apt-get install -y locales \
    && locale-gen ja_JP.UTF-8 \
    && dpkg-reconfigure locales

RUN apt-get install -y openssh-server

EXPOSE 22


