

//things this needs
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId,
       ref: "Author"
       },
     image: String,
     releaseDate: String
});

//things this supplies
var Book = mongoose.model('Book', BookSchema);
//exports
module.exports = Book;
