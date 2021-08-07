import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Text, Link as PipeLink, Pipeline } from 'pipeline-ui';

export default function Failure({ userAddress }) {
  const [balance, setBalance] = useState(undefined)
  if (userAddress) {
    Pipeline.balance(userAddress).then(balance => {
      setBalance(balance === undefined ? 0 : balance);
    });
  }
  return (
    <Card>
      {balance !== undefined && <Text>Sorry, {balance} algos is not enough to log in.</Text>}
      <PipeLink><Link to={'/'}>Go home</Link></PipeLink>
    </Card>
  );
}