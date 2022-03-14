const mongoose = require("mongoose");
class Mongo {
  static connect = () => {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Connect to DB successfully");
      })
      .catch(() => {
        console.log("Connect to DB Fail");
      });
  };
}
module.exports = Mongo;
