# Use a node image for building the application
FROM node:14-alpine AS builder

WORKDIR /portfolio_site

# Copy only the package files first
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
