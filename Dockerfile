# Paso 1: Imagen base
FROM node:16-alpine

# Paso 2: Establece el directorio de trabajo
WORKDIR /app

# Paso 3: Instala dependencias
COPY package*.json ./
RUN npm install

# Paso 4: Copia el resto de los archivos del proyecto
COPY . .

# Paso 5: Expone el puerto
EXPOSE 5173

# Paso 6: Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
