const yup = require('yup')

const userSchema = yup.object({
    fname: yup.string().required(),
    lname: yup.string().required(),
    mail: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
})

module.exports = userSchema;