var movies = require('../controllers/movies.js');

module.exports = function(app) {
    app.post("/movie", (req, res) => { 
        movies.addMovie(req,res);
    });

    app.get("/movies", (req, res) => { 
        //make a request to the database
        // call the getTask() in controller, get data
        movies.getMovie(req,res);
    });
    
    app.get("/movie/:id", (req, res) => {
        movies.getAMovie(req,res);
    })

    app.post("/addComment/:id", (req, res) => { 
        movies.addComment(req,res);
    });

    app.delete("/movie/:id", (req, res) => { 
        movies.deleteAMovie(req,res);
    });

}