import React, { useState } from 'react';
import { verifyId } from '../circom/verifyId';
import { useNavigate } from 'react-router-dom';

const Vote = ({ circuit, votes, setVotes }) => {
    const [voterId, setVoterId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleVote = () => {
        const isValid = verifyId(circuit, voterId);
        if (isValid) {
            setVotes([...votes, voterId]);
            setMessage('Vote cast successfully!');
            setTimeout(() => navigate('/results'), 1000); // Navigate to results after 1 second
        } else {
            setMessage('Invalid voter ID.');
        }
    };

    return (
        <div>
            <h2>Vote</h2>
            <input
                type="text"
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                placeholder="Enter your voter ID"
            />
            <button onClick={handleVote}>Vote</button>
            <p>{message}</p>
        </div>
    );
};

export default Vote;
