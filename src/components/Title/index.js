import React from 'react';
import { Box, Heading } from 'pipeline-ui';
import { Algo } from '@pipeline-ui/icons';

import './Title.css';

function Title() {
  return (
    <Box className={'Title'}>
      <Algo color={'green'} size={48}/>
      <Heading className={'Title-heading'}>
        Pipeline UI login demo with restricted balance
      </Heading>
    </Box>
  );
}

export default Title;