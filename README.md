<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# MS-ORDERS

<img align="left" alt="Arquitectura" src="assets/arquitectura.png" style="margin: 10px">
<br>

## Levantar el proyecto

1. Clonar el repositorio
2. Instalar los modulos de node
3. Crear un archivo `.env` basado en el `env.template`
4. Ejecutar el comando `docker compose up -d` para levantar la base de datos
5. Ejecutar migración de prisma `npx prisma migrate dev`
6. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
7. Ejecutar `npm run start:dev`