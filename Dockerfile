FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install nodemon -g

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "start-dev" ]