const CatchError = (err, req, res, next) => {
  // get err
  //console.log(JSON.stringify(err, null, 2));
  // validation error in mongoose
  if (err.name === "ValidationError") {
    const errors = err.errors;
    const keys = Object.keys(errors);
    console.log(keys);
    const ObjectErrors = {};
    keys.map((key) => {
      ObjectErrors[key] = errors[key].message;
    });
    err.statuscode = 400;
    err.message = ObjectErrors;
    console.log(ObjectErrors);
  }
  if (err.kind === "ObjectId") {
    err.statuscode = 400;
    err.message = "Invalid Id";
  }
  if (err.code === 11000) {
    err.statuscode = 400;
    const fields = Object.keys(err.keyValue)[0];
    err.message = `${fields} is dupplicated`;
  }
  res.status(err.statuscode || 500).json({
    success: false,
    statuscode: err.statuscode,
    message: err.message,
  });
};
module.exports = CatchError;
