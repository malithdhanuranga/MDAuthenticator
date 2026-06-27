# Use the official Node.js 22 LTS image as the base
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose the port your app will run on (e.g., 3000 for Express or Next.js)
EXPOSE 3000

# Start the application (For now, it runs the test script, but you will update this later)
CMD ["npm", "start"]
