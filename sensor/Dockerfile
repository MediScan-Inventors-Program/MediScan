FROM node:20-alpine

RUN apk add --update --no-cache libpcap-dev python3 py3-pip make g++

WORKDIR /app

VOLUME [ "/app" ]

CMD npm i && npm run nodemon
