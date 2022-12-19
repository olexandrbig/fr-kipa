FROM --platform=linux/amd64 node:16.14 as build
WORKDIR /app

COPY .env.prod ./.env
COPY package.json ./
COPY yarn.lock ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

COPY . .

RUN yarn build-prod

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM --platform=linux/amd64 node:16.16.0-alpine3.16

WORKDIR /app
COPY --from=build /app  .

ENV HOST=0.0.0.0

EXPOSE 8000

CMD yarn start
