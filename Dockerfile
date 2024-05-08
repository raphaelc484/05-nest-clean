FROM node:18 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY .env ./
COPY prisma ./prisma

COPY . .

RUN npm install
RUN npm run build
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine3.19

WORKDIR /usr/src/app


COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/.env ./.env
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/prisma ./prisma
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3333

CMD npx prisma migrate deploy && npm run start:prod

