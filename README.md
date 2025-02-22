<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# MS-ORDERS

## Levantar el proyecto

1. Clonar el repositorio
2. Instalar los modulos de node
3. Crear un archivo `.env` basado en el `env.template`
4. Ejecutar el comando `docker compose up -d` para levantar la base de datos
5. Ejecutar migración de prisma `npx prisma migrate dev`
6. Ejecutar `npm run start:dev`