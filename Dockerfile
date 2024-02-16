# Stage 1: Build the React application
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:1.21-alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 8083 for the container
EXPOSE 8083

# Copy custom nginx configuration (if necessary)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx and keep the process running
CMD ["nginx", "-g", "daemon off;"]
