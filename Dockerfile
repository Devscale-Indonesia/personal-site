FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]

EXPOSE 3010