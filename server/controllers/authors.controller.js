const { update } = require("../models/authors.model");
const Author = require("../models/authors.model")

module.exports = {
    create: function(req,res){
        console.log("create method executed");
        
        Author.create(req.body)
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
    findAll: function(req,res){
        Author.find()
        .then((allAuthors)=> {
            res.json({authors:allAuthors})
        })
        .catch((err) => {
            res.json(err);
        });
    },
    getOne(req,res){
        Author.findById(req.params.id)
        .then((oneAuthor)=> {
            res.json({author:oneAuthor})
        })
        .catch((err) => {
            res.json(err);
        });
    },
    delete(req,res){
        Author.findByIdAndDelete(req.params.id)
        .then((author)=> {
            res.json(author)
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update(req,res){
        console.log("update method executed")
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators:true,
            new: true,
        })
        .then((updatedAuthor) => {
            res.json(updatedAuthor);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
}