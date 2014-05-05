FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y jetty

RUN cp -p /etc/default/jetty /etc/default/jetty.org
RUN cat /etc/default/jetty.org | awk '{ if ( $_~/NO_START/ ) { print "NO_START=0"; } else { print; } }' > /etc/default/jetty
RUN echo "JETTY_HOST=0.0.0.0" >> /etc/default/jetty

EXPOSE 8080
# CMD [ "/etc/init.d/jetty", "start" ]


