import React from 'react';
import { Card, Heading, Text } from 'pipeline-ui';

import { minBalance } from '../../config.json';

export default function Home() {
  return (
    <Card>
      <Heading>Welcome to the demo!</Heading>
      <Text>If yo have at least {minBalance} algos on your account you can log in</Text>
    </Card>
  )
}