# Use the official Node.js image as base
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Expose port 3000 for the web server
EXPOSE 3000

# Start the Nuxt.js application
CMD [ "npm", "start" ]
