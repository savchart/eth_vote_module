// SPDX-License-Identifier: BUSL-1.1
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input} from '@chakra-ui/react';

interface TitleBarProps {
    verifyId: (id: string) => Promise<boolean>;
    onValidId: () => void;
}

const generateUniqueId = () => `vote-${Math.random().toString(36).substr(2, 9)}`;

function TitleBar({verifyId, onValidId}: TitleBarProps) {
    const [voteId, setVoteId] = useState('');

    const handleVoteSubmit = async () => {
        const isValid = await verifyId(voteId);
        onValidId();
    };

    return (
        <Box>
            <FormControl mt={4}>
                <FormLabel>Vote ID</FormLabel>
                <Input
                    placeholder='Enter your vote ID'
                    value={voteId}
                    onChange={(e) => setVoteId(e.target.value)}
                />
                <Button mt={2} colorScheme='blue' onClick={handleVoteSubmit}>Submit Vote ID</Button>
            </FormControl>
        </Box>
    );
}

export default TitleBar;
