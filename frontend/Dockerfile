FROM node:14-alpine AS builder

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn

ADD src ./src
ADD public ./public
RUN yarn build

FROM caddy:alpine

COPY --from=builder /src/build /usr/share/caddy