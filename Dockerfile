FROM node:latest as build-deps

LABEL maintainer="FarshadRoozbahani@Teams"

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build --prod

FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
