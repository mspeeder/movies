var mongoose = require('mongoose');
var Rating = mongoose.model('Rating');
var Movie = mongoose.model('Movie');

module.exports = {
    addMovie: (req,res) => {
        Movie.create(req.body, function(err,data) {
            if(err || data == null) {
                console.log("Something wrong");
                res.json({message: "Error", error: err})
            } else {
                console.log("Created a cask");
                res.json({message: "Success", movie: data})
            }
        })
    },
    getMovie: (req,res) => {
        // make a request to the database
        Movie.find({}, (err,data) => {
            if(err|| data == null) {
                console.log('Something wrong when finding cakes!');
                res.json({message: "Error", error: err})
            } else {
                console.log("Found movies!");
                res.json({message: "Success", movies: data})
            }
        });
    },

    getAMovie: (req,res) => {
        Movie.findOne({_id:req.params.id}, function(err,data) {
            if(err || data == null) {
                console.log('Something wrong when finding a movie!')
                res.json({message: "Error", error: err})
            } else {
                console.log("Found a movie!");
                res.json({message: "Success", movie:data})
            }
        });
    },

    addComment: (req,res) => {
        console.log(req.body, "what is in req.body")
        Rating.create(req.body, function(err,data) {
            if(err) {
                console.log("We have an error when add comment")
            } else {
                Movie.findOneAndUpdate({_id: req.params.id}, {$push: {ratings:data}}, function(err,data) {
                    if(err) {
                        console.log("There is an error when update");
                    } else {
                        console.log("Succussfully updated");
                        res.json({message: "Success", movie:data})
                    }
                })
            }
        })
    },

    deleteAMovie: (req,res) => {
        Movie.remove({_id:req.params.id}, function(err,data) {
            if(err || data == null) {
                console.log("Something went wrong when deleting a movie!")
                res.json({message: "Error", error: err})
            } else {
                console.log('Record Deleted');
                res.json({message: "Success", data:data})
            }
        })
    },
}
