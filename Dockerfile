# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any necessary dependencies
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command that runs the app
CMD ["npm", "start"]
