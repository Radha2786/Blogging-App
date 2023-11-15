// schema for your server side validation\\

const Joi = require('joi');

const blogschema = Joi.object({
    title: Joi.string().required(),
    img:Joi.string().required(),
    author:Joi.string().required(),
    desc:Joi.string().required(),
})

const reviewschema = Joi.object({
    rating:Joi.number().min(1).max(5).required(),
    comment:Joi.string().required()
})

module.exports={blogschema,reviewschema};  