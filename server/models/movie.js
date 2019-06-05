var mongoose = require('mongoose');
// const mongoose = require('../config/mongoose').mongo;

// !!!add the Schema that will be incluede in another Schema first.
const RatingSchema = new mongoose.Schema({
    name:{ type: String},
    star:{type:Number},
    review:{type:String},
});

const MovieSchema = new mongoose.Schema({
    title: {type:String},
    ratings:[RatingSchema],
});

mongoose.model('Rating', RatingSchema);
mongoose.model('Movie', MovieSchema);
module.exports = {
    Rating: mongoose.model('Rating'),
    Movie: mongoose.model('Movie')
};