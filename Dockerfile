FROM node

WORKDIR /app

COPY . /app
RUN npm install
RUN node_modules/grunt/bin/grunt

EXPOSE 3000

CMD ["npm", "start"]