From node:20

WORKDIR src/app

COPY package* .

RUN npm install

COPY ./backend .
COPY .env .

EXPOSE 3000

CMD ["node", "index.js"]