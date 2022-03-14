require("dotenv").config();
const express = require("express");
const Mongo = require("./config/DB/mongoDB/index");
const ProductRoute = require("./routes/ProductRouter");
const AuthRoute = require("./routes/AuthRouter");
const UserRoute = require("./routes/UserRouter");
const CartRoute = require("./routes/CartRouter");
const orderRoute = require("./routes/OrderRouter");
const MailService = require("./utils/MailService");
const CatchError = require("./middlewares/error");
const swaggerjsdoc = require("./docs/SwaggerConfig");
const swagger = require("swagger-ui-express");

Mongo.connect();
MailService.init();
const app = express();
app.use(express.json());

app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/cart", CartRoute);
app.use("/api/v1/order", orderRoute);
app.use("/doc", swagger.serve, swagger.setup(swaggerjsdoc));

app.use("/api/v1/order", orderRoute);
app.use(CatchError);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`This Website is running: http://localhost:${port}`);
});
