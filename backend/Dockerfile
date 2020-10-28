FROM node:14-alpine

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn

ADD src ./src

ENV HTTP_PORT 4000

EXPOSE 4000

ENTRYPOINT [ "yarn", "run", "prod" ]