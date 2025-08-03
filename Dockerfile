FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only dependency files first (better for Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]