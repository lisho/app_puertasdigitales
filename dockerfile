# Dockerfile

# base image
FROM node:15

# create & set working directory
#RUN mkdir -p /usr/app
WORKDIR /app

# copy source files
#COPY . /usr/app

# install dependencies
RUN npm install

# start app desarrolllo
# RUN npm run build
EXPOSE 3000
CMD npm run dev
# CMD npm run start

# CREAR IMAGEN
    # docker build -t client .

# CREAR CONTENEDOR
    # docker run -d -p 3000:3000 -v ./:/usr/src --name my-running-app client:latest

# REFERENCIAS
    # https://medium.com/swlh/dockerize-your-next-js-application-91ade32baa6
    # https://openwebinars.net/blog/que-es-dockerfile/
    # https://docs.docker.com/compose/compose-file/compose-file-v3/
    # https://github.com/klosowsk/Docker-React-ExpressAPI-MySQL/blob/master/docker-compose.yml
    # https://dev.to/azure/desarrollo-de-aplicaciones-node-js-y-express-js-con-docker-4agm