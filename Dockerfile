FROM node:16.19.1

WORKDIR /app

COPY . .
COPY ./.env.prod ./.env

RUN npm install

ARG SITE
ENV SITE=${SITE}

RUN SITE=${SITE} node update.js

RUN SITE=${SITE} npm run generate
RUN SITE=${SITE} npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
