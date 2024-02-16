FROM node:18.17.1 as build
LABEL authors="Apoorva Pasbola"

ENTRYPOINT ["top", "-b"]

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application and then Gzips it
RUN npm run build:prod


# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/ui-dist-zip /usr/share/nginx/html

# Expose port 80
EXPOSE 80
