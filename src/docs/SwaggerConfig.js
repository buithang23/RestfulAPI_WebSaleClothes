const { request } = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const { version } = require("../../package.json");

const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Nodejs",
      version,
      description: "Customer API Information",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://websaleclothes.herokuapp.com",
      },
    ],
  },
  apis: ["./src/docs/swagger/*.js", "./src/docs/components/*.yml"],
};

module.exports = swaggerJsDoc(swaggerConfig);
