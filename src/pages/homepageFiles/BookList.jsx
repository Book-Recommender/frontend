import React, { useState } from 'react';

const BookList = () => {
    // Array of books where each book is an object with relevant details
    const [books, setBooks] = useState([
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            avgRating: 4.29,
            numRatings: 4414152,
        },
        {
            title: '1984',
            author: 'George Orwell',
            avgRating: 4.19,
            numRatings: 4869123,
        },
        {
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            avgRating: 4.27,
            numRatings: 954974,
        },
        {
            title: 'Hamlet',
            author: 'William Shakespeare',
            avgRating: 4.02,
            numRatings: 986900,
        },
        {
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel García Márquez',
            avgRating: 4.12,
            numRatings: 1010880,
        },
        {
            title: 'Anna Karenina',
            author: 'Leo Tolstoy',
            avgRating: 4.09,
            numRatings: 874730,
        },
        {
            title: 'The Odyssey',
            author: 'Homer',
            avgRating: 3.81,
            numRatings: 1116962,
        },
        {
            title: 'The Stranger',
            author: 'Albert Camus',
            avgRating: 4.03,
            numRatings: 1189741,
        },
        {
            title: 'The Brothers Karamazov',
            author: 'Fyodor Dostoevsky',
            avgRating: 4.38,
            numRatings: 346888,
        },
        {
            title: 'Great Expectations',
            author: 'Charles Dickens',
            avgRating: 3.79,
            numRatings: 827575,
        },
    ]);

    return (
        <div>
            <h1 className="book-header">Top 10 Books: Bokkubben World Library</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Avg Rating</th>
                    <th># of Ratings</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.avgRating}</td>
                        <td>{book.numRatings.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
