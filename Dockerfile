FROM node:16.19.1

WORKDIR /app

COPY . .
COPY ./.env.prod ./.env

RUN npm install

RUN node update.js

RUN npm run generate
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
