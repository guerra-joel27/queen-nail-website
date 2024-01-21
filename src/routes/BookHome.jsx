import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/book/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/book/BooksTable';
import { BooksCard } from '../components/book/BooksCard';
import BackButton from '../components/book/BackButton';


const Home = () => {
    //The useState function returns an array with two elements:
    //The current state value (books in this case), it will be used to store an array of book data retrieved from an API or any other data source.
    //A function (setBooks) that allows you to update the state.
    // change books variable using setBooks function
    // It is set to an empty array ([]) as its initial value. 
    const [books, setBooks] = useState([]);
    // change loading variable using setLoading variable, with init value being false
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');



    // useEffect is use to handle side effect in functional components
    // side effects: data fetching, subscription, manual DOM manipulations
    // similar to lifecycle methods in class components
    // useEffect will fetch data from the API endpoint 
    // execute when component mount for the first time (cause of empty [])
    useEffect(() => {
        //setLoading indicate that the data is being fetched
        setLoading(true);
        // axios is a library for making HTTP request (result of this request is a Promise)
        axios.get('http://localhost:5555/books')
            .then((response) => {
                //make sure that this fetch the correct data field, otherwise the website will not render
                setBooks(response.data.individualBook);
                //console.log(response.data.individualBook);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);



    return (
        <div className='p-4'>
            <BackButton/>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BooksTable books={books} />
            ) : (
                <BooksCard books={books} />
            )}
        </div>
    )
}

export default Home