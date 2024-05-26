import React, { useState } from 'react';
import { generateCircuit } from '../circom/generateCircuit'; // Mocked function for demo purposes

const CreateCircuit = ({ voterList, setCircuit }) => {
    const handleCreateCircuit = () => {
        const circuit = generateCircuit(voterList);
        setCircuit(circuit);
    };

    return (
        <div>
            <h2>Create Circuit</h2>
            <button onClick={handleCreateCircuit}>Generate Circuit</button>
        </div>
    );
};

export default CreateCircuit;
