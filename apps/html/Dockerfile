FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/html .
ENV PORT=3334
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express hbs
CMD node ./main.js
