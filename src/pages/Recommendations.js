import React, {useState, useEffect} from 'react';

export const Recommendations = ({userId}) => {
    const [reccs, setReccs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const link = "http://127.0.0.1:8000";

    useEffect(() => {
        if (!userId) return; //need this for getting recommendations
        setLoading(true);
        setError(null);

        fetch(`${link}/books/recommended?user_id=${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    setReccs(data);
                } else {
                    setReccs([]);
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching recommendations');
                setLoading(false);
                console.error(err);
            });
    }, [userId]);

    if (loading) {
        return <p>Loading recommendations, please wait</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Recommended Books</h2>
            {reccs.length > 0 ? (
                <ul>
                    {reccs.map((book, index) => (
                        <li key={index}>
                            <strong>{book.title}</strong><br />
                            Author: {book.author}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recommendations available</p>
            )}
        </div>
    );
};
