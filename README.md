# Card Validation

Prueba tecnica de validacion y generación de token card.

## Requisitos

- Node.js (versión 18.X.X)
- npm (viene con Node.js)
- Tener libre el puerto 3000

## Tecnologias

- Node.js versión 18
- npm
- Docker
- Redis (imagen en docker)
- Redis-mock
- Serverless
- Jest
- Eslint

## Instalación

1. Clona este repositorio: `git clone card-validation-ms`
2. Navega a la carpeta del proyecto: `cd card-validation-ms`
3. Instala las dependencias: `npm install`

## Uso

1. Ejecuta `docker-compose up -d` para levantar la imagen de redis
2. Ejecuta el proyecto offline con serverless: `npm run offline` -- anteponer sudo en caso sea necesario.
3. Nuestro X-Api-Key para el uso de los 2 entpoints es: pok123opkwqopkdwqok321 `Se encuentra en el .env`
4. Correran 2 Endpoints : create-token y get-card
5. En el postman importar el curl create-token :
   curl --location --request POST 'http://localhost:3000/dev/card/create-token' \
   --header 'X-Api-Key: pok123opkwqopkdwqok321' \
   --header 'bea;' \
   --header 'Content-Type: application/json' \
   --data-raw '{
   "email" : "kevinsalazar30@gmail.com",
   "card_number" : 4111111111111111,
   "cvv" : 124,
   "expiration_year" : "2024",
   "expiration_month" : "09"
   }'
6. En el postman importar el curl de get-card:
   curl --location --request GET 'http://localhost:3000/dev/card/get-card' \
   --header 'X-Api-Key: pok123opkwqopkdwqok321' \
   --header 'Authorization: Bearer 7yi8oYcD3Da3UqRg'

   # NOTA : el Authorization sera devuelto del entpoint create-token.

## Unit Test

1. Para correr las unit test en la consola: `npm run test`

# NOTA: estamos utilizando mock-redis para mockear y no depender del docker levantado.

# NOTA: estamos utilizando un .env.test para las variables solo test.
