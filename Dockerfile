# 1. Base image
FROM node:20-alpine

# 2. Working directory
WORKDIR /app

# 3. Dependencies
COPY package*.json ./
RUN npm install --production

# 4. Copy source
COPY . .

# 5. Build TypeScript
RUN npm run build

# 6. Start command
CMD ["node", "dist/main"]

# 7. Expose port
EXPOSE 3000
