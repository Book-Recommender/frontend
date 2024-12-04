import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './bookEntry.css';
uuidv4();

export const EntriesWrapper = ({userId}) => {
    const [entries, setEntries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const link = "http://127.0.0.1:8000";

    const addCompletedBook = async (entry) => {
        const response = await fetch(`${link}/books/completed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId, //change this later for userid to pass around
                id: entry.book.id,
            }),
        });
        if (response.ok) {
            console.log(`Book "${entry.book.title}" is completed`);
        } else {
            throw new Error('Failed to mark book as completed');
        }
    };

    const addEntry = async (entry) => {
        const newEntry = {
            id: uuidv4(),
            book: entry,
            completed: true,
            isEditing: false
        };

        await addCompletedBook(newEntry); //send to db
        setEntries([...entries, newEntry]); //our list on file
    };

    const searchBooks = () => {
        //if not empty
        if (!searchQuery.trim()) {
            setSearchResults([]);  // clear previous search results if the query is empty
            return;
        }

        // search books
        fetch(`${link}/books/search?query=${encodeURIComponent(searchQuery)}`)
            .then(response => response.json())  // Parse the JSON response
            .then(data => {
                setSearchResults(data);  // set search results
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error fetching the search results.');
            });
    };

    const addBookFromSearch = async (book) => {
        // add clicked book from search
        await addEntry(book);
        setSearchQuery('');  // clear search after picking result
        setSearchResults([]);  // clear search
    };

    return (
        <div className='entries-wrapper'>
            <h1>My Library</h1>

            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}  // Update the search query state
                    placeholder="Search books by title"
                />
                <button onClick={searchBooks}>Search</button>
            </div>

            <div id="search-results">
                {searchResults.length > 0 ? (
                    <div>
                        <h2>Search Results:</h2>
                        {searchResults.map((book, index) => (
                            <div
                                key={index}
                                className="book-item"
                                onClick={() => addBookFromSearch(book)}  // add book to list on click
                                style={{cursor: 'pointer'}}  // change cursor to pointer to click
                            >
                                <div className="search-format">
                                    <strong>{book.title}</strong><br/>
                                    Author: {book.author}<br/>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    searchQuery && <p>No books found for "{searchQuery}"</p>
                )}
            </div>
        </div>
    );
};
