import React, { useState } from 'react';
import { Card, Heading, Text, Pipeline } from 'pipeline-ui';

export default function Restricted({ userAddress }) {

  const [balance, setBalance] = useState(undefined);

  if (userAddress) {
    Pipeline.balance(userAddress).then(balance => {
      setBalance(balance === undefined ? 0 : balance);
    });
  }

  return (
    <Card>
      <Heading as={'h1'}>Congratulations!</Heading>
      <Text>Now you're on a restricted page.</Text>
      {balance !== undefined && <Text>Your balance is {balance}</Text>}
    </Card>
  )
}