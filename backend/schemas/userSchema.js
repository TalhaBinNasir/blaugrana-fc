const joi = require("joi");

const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  firstName: joi.string().min(2).max(40).required(),
  lastName: joi.string().min(2).max(40).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: joi.ref("password"),
  dob: joi.date().required(),
});

module.exports = userSchema;
