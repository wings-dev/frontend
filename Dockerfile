FROM node:16.19.1

WORKDIR /app

COPY . .
COPY ./.env.prod ./.env

RUN npm install

ARG SITE
ENV SITE=${SITE}

RUN node update.js

RUN npm run generate SITE=${SITE}
RUN npm run build SITE=${SITE}

EXPOSE 3000

CMD [ "npm", "start" ]
