# Stage 1: Build
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy only package.json
COPY audioui/package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps


# Copy all project files
COPY . .

# Build the application
RUN npm run build



# Stage 2: Serve
FROM nginx:stable-alpine

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html




# Expose the port nginx will run on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
