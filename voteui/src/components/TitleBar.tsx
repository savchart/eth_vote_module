// SPDX-License-Identifier: BUSL-1.1
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Flex, HStack, Button, Text, Input, FormControl, FormLabel, Box } from '@chakra-ui/react';
import {ethers} from "ethers";

interface TitleBarProps {
    setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | null>>;
    address: string | null;
    setAddress: React.Dispatch<React.SetStateAction<string | null>>;
}

const generateUniqueId = () => `vote-${Math.random().toString(36).substr(2, 9)}`;

function TitleBar({ setSigner, address, setAddress }: TitleBarProps) {
    const [voteId, setVoteId] = useState(generateUniqueId());
    const [vote, setVote] = useState('');

    const handleVoteSubmit = () => {
        if (vote.trim()) {
            alert(`Vote submitted with ID: ${voteId} and Vote: ${vote}`);
            // Reset form
            setVote('');
            setVoteId(generateUniqueId());
        } else {
            alert('Please enter your vote.');
        }
    };

    return (
        <Box>
            <Flex bg='gray.700' width='100%' justify='space-between' borderRadius='md' shadow='lg' align='center' p={2}>
                <Text fontWeight='bold'>Vote</Text>
                <HStack>
                    <Text>{address && <span>Address: {address}</span>}</Text>
                </HStack>
            </Flex>
            <FormControl mt={4}>
                <FormLabel>Vote ID: {voteId}</FormLabel>
                <Input
                    placeholder='Enter your vote'
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}
                />
                <Button mt={2} colorScheme='blue' onClick={handleVoteSubmit}>Submit Vote</Button>
            </FormControl>
        </Box>
    );
}

export default TitleBar;
