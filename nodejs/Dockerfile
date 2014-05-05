FROM ubuntu:latest
RUN apt-get update

RUN    apt-get install -y software-properties-common
RUN    add-apt-repository -y ppa:chris-lea/node.js
RUN    echo "deb http://archive.ubuntu.com/ubuntu precise universe" >> /etc/apt/sources.list
RUN    apt-get update
RUN    apt-get install -y nodejs

# App
ADD index.js /src/index.js
ADD package.json /src/package.json

# Install app dependencies
RUN cd /src; npm install

EXPOSE  8080
CMD ["node", "/src/index.js"]

