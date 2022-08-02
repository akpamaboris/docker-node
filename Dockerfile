#base image
FROM node:14

WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./


# Bundle app source

COPY . .

CMD ["npm", "start"]
