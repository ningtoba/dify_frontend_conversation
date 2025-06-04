FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD ["yarn","start"]
