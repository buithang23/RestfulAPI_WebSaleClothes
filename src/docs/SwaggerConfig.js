const { request } = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const { version } = require("../../package.json");

const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Website Sale Clothes",
      version,
      description: "Restfull API Website sale clothes",
    },
    servers: [
      {
        url: "https://websaleclothes.herokuapp.com",
      },
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/docs/swagger/*.js", "./src/docs/components/*.yml"],
};

module.exports = swaggerJsDoc(swaggerConfig);
