let controller = {
    getAll: (req, res, next) =>{
        res.statusCode =  200;
        res.setHeader("Content-Type", "text/plain");
        res.end("I will send you all the books ");
    },
    addOne: (req, res, next) =>{
        res.statusCode =  200;
        res.setHeader("Content-Type", "text/plain");
        res.end("I will add the new book: "+ req.body.title);
    },
    getOne: (req, res, next) =>{
        res.statusCode =  200;
        res.setHeader("Content-Type", "text/plain");
        res.end("I will send you the book number:  " + req.params.id);
    },
    updateOne: (req, res, next) =>{
        res.statusCode =  200;
        res.setHeader("Content-Type", "text/plain");
        res.end("I will modify the book number: "+ req.params.id);
    },
    deleteOne: (req, res, next) =>{
        res.statusCode =  200;
        res.setHeader("Content-Type", "text/plain");
        res.end("I will delete the book:  "+ req.params.id);
    },
};
module.exports = controller;