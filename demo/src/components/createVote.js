import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateVote = ({ setVoterList }) => {
    const [voters, setVoters] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const voterArray = voters.split(',').map(v => v.trim());
        setVoterList(voterArray);
        navigate('/vote');
    };

    return (
        <div>
            <h2>Create Vote</h2>
            <form onSubmit={handleSubmit}>
        <textarea
            value={voters}
            onChange={(e) => setVoters(e.target.value)}
            placeholder="Enter voter IDs separated by commas"
        />
                <button type="submit">Create Vote</button>
            </form>
        </div>
    );
};

export default CreateVote;
