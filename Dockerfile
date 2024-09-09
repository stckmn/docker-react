FROM node:current-alpine3.19 AS builder

WORKDIR '/app'

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx
# This is for elastic beanstalk to know what port to expose
EXPOSE 80  

COPY --from=builder /app/build /usr/share/nginx/html
