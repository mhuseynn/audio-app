# Build Stage

FROM node:16-alpine AS build


WORKDIR /audioui


COPY package*.json ./





RUN npm install --legacy-peer-deps


COPY . .




RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]