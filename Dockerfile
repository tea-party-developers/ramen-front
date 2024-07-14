# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.4.1

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=yarn.lock,target=yarn.lock \
  --mount=type=cache,target=/root/.yarn \
  yarn install --frozen-lockfile && yarn cache clean

EXPOSE 3000

CMD ["yarn", "dev"]
