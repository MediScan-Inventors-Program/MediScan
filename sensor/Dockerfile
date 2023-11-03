FROM node:20-alpine

RUN apk add --no-cache libpcap-dev

WORKDIR /app

VOLUME [ "/app" ]

CMD npm i && npm run nodemon
