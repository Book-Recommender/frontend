import React from 'react';
import './home.css';
import BookList from "./BookList";


function Home() {
    return (
        <div className="home-page">
            <h1>We are Book Club!</h1>
            <p className="info">Here we like our users to share their current and past reads to create a personalized reading list for you.
            Let's get started! First, redirect to the Library tab using our navigation bar above and add books you have read! When you are ready, redirect to the Recommendations tab
                and let's see what you've been recommended!
            </p>
            <p className="list-header">
                Optionally, check out the top 10 books of all time (according to the Bokklubben World Library):
            </p>

            <BookList />

        </div>
    );
}

export default Home;