import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error)
  throw new Error(
    `Error en configuración de variables de entorno: ${error.message}`,
  );

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
};
