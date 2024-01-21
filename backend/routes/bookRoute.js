import express from 'express';
import {Book} from '../dataModels/bookModel.js';

// create a Router object provided by Express
// this router object will call the function
const router = express.Router();


// a post function(or router) to create a book
router.post('/',async(request,response)=>{
    try {
        // Validate the request first
        if(!request.body.title||!request.body.author||!request.body.publishYear){
            return response.status(400).send({
                message:'Send all required field: title, author, publishYear'
            })
        }
        //create a new book
        const newBook={
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        // wait for the bookModel to create a new book
        const book = await Book.create(newBook);
        // send the response status and the newly created book to the client
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


// get all book in the db
router.get('/', async(request, response)=>{
    try {
        const books = await Book.find({});

        // return the # of the book and each individual book
        return response.status(200).json({
            amountOfBooks: books.length,
            individualBook: books
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


// find book by id
router.get('/:id', async(request, response)=>{
    try {
        const {id} = request.params;
        // findById is function of mongoose
        const book = await Book.findById(id);

        // return the # of the book and each individual book
        return response.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


// update a book by id
router.put('/:id',async(request,response)=>{
    try {
        if(!request.body.title||!request.body.author||!request.body.publishYear){
            return response.status(400).send({
                message:'Send all required field: title, author, publishYear'
            })
        }

        const{id} = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body);

        if(!result){
            return response.status(404).json({message: "Book not found"});
        }

        return response.status(200).send({message: "Book updated successfully"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


//delete book by id
router.delete('/:id',async(request,response)=>{
    try {
        const {id} = request.params;
        // findById is function of mongoose
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message:"Book not found"});
        }
        return response.status(200).json({message:"Book deleted successfully"});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


// export allow you to make this available for other modules
export default router;