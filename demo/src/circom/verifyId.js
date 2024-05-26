export const verifyId = (circuit, voterId) => {
    return circuit.voterList.includes(voterId);
};
