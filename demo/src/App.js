import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateVote from './components/createVote';
import Vote from './components/vote';
import ShowResults from './components/showResult';
import { generateCircuit } from './circom/generateCircuit';

const App = () => {
    const [voterList, setVoterList] = useState([]);
    const [circuit, setCircuit] = useState(null);
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        if (voterList.length > 0) {
            const generatedCircuit = generateCircuit(voterList);
            setCircuit(generatedCircuit);
        }
    }, [voterList]);

    return (
        <Router>
            <div>
                <h1>Telegram Voting App</h1>
                <Routes>
                    <Route
                        path="/"
                        element={<CreateVote setVoterList={setVoterList} />}
                    />
                    <Route
                        path="/vote"
                        element={<Vote circuit={circuit} votes={votes} setVotes={setVotes} />}
                    />
                    <Route
                        path="/results"
                        element={<ShowResults votes={votes} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
