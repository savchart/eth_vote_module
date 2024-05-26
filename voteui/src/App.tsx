import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, theme } from '@chakra-ui/react';
import { ethers } from 'ethers';

import TitleBar from './components/TitleBar';
import Body from './components/Body';

export const App = () => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isEligible, setIsEligible] = useState<boolean>(false);

  const verifyId = async (id: string) => {
    // Mock verification logic
    return id.startsWith('vote-');
  };

  const handleValidId = () => {
    setIsEligible(true);
  };

  return (
      <ChakraProvider theme={theme}>
        <Heading>
          <title>Vote</title>
          <meta name="description" content="Vote Anonymously" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Heading>
        <Box bg='black' w='100%' h='100%' p={4} color='white'>
          {!isEligible ? (
              <TitleBar verifyId={verifyId} onValidId={handleValidId} />
          ) : (
              <Body signer={signer} address={address} />
          )}
        </Box>
      </ChakraProvider>
  );
};

export default App;
