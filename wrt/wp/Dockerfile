# Stage 1: Build React App
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm" , "start"]
