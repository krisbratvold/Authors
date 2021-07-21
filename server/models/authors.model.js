const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be longer than {MINLENGTH} characters"]
        }
    }, 
    {timestamps:true}
    );

const Author = mongoose.model("Author", AuthorsSchema);

module.exports = Author; 

