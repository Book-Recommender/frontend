import React, {useState} from 'react';

const getReccs = () => {


};

export const Recommendations = ({entries}) => {
    const [reccs, setReccs] = useState([]);

    fetch(`http://127.0.0.1:8000/books/recommended`)
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            setReccs(data);  // set search results
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error fetching the recommended results.');
        });
}