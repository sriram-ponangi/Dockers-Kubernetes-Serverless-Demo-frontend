# STAGE 1: Build

FROM node:14.17.0-alpine3.12 as builder

# Performing npm install only with package.json and package-lock.json files 
# to create a separate layer in docker build process for downloading dependencies into node_modules package.
# This prevents the unnecessary npm installs at each build by using the cached stage from previous builds.
COPY package.json package-lock.json ./
RUN npm install && mkdir /demo-app && mv ./node_modules ./demo-app

WORKDIR /demo-app
COPY . .

# Building the angular app in production mode and saving the generated artifacts into the dist directory
RUN npm run build --prod --output-path=dist

###################################################################################################################
# STAGE 2: Setup WebServer

FROM nginx:1.14.0-alpine

COPY nginx-default.conf /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/

WORKDIR /usr/share/nginx/

RUN rm -rf html/*

COPY ./dist/angular-app /usr/share/nginx/html

## Copy the saved artifacts in dist directory From ‘builder’ stage to the default nginx public folder
COPY --from=builder /demo-app/dist /usr/share/nginx/html

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"] 
