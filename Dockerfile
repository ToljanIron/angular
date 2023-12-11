FROM node:latest as node

WORKDIR /app

COPY . .
RUN npm install

RUN npm run build --prod

FROM nginx:alpine as front-nginx

COPY --from=node /app/dist/angular /usr/share/nginx/html

COPY nginx/nginx.conf  /etc/nginx/conf.d/default.conf
