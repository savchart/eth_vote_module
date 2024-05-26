import React from 'react';

const ShowResults = ({ votes }) => {
    return (
        <div>
            <h2>Voting Results</h2>
            <ul>
                {votes.map((vote, index) => (
                    <li key={index}>{vote}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShowResults;
