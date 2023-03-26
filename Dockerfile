FROM node:16

WORKDIR /app

COPY . .
COPY ./.env.prod ./.env

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
