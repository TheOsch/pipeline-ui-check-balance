import React from 'react';
import PropTypes from 'prop-types';
import { Button, Pipeline } from 'pipeline-ui';

import { minBalance } from '../../config.json';

/**
 * A wallet object used in Pipeline operations.
 */
const algoWallet = Pipeline.init();

/**
 * The button click handler. Does all the job.
 * 
 * @param {function(string, bool)} onLogin a callback called finally.
 *                                        The first argument is Algorand address,
 *                                        the second one is success
 */
function doLogin(onLogin) {
  // Show login dialog and get the user address
  Pipeline.connect(algoWallet).then(address => {
    if (!address) {
      return;
    }
    // Get the user's balance
    Pipeline.balance(address).then(balanceString => {
      // The balance comes in the form 'X Algos'
      let balance = balanceString ? 
        JSON.parse(balanceString.split(' ', 1)[0]) :
        0;
      // Checking
      let success = balance >= minBalance;
      // Calling the callback
      if (onLogin) {
        onLogin(address, success);
      }
    })
  })
}

/**
 * 
 */
function Login({ onLogin }) {
  return <Button onClick={() => doLogin(onLogin)}>Login</Button>;
}

Login.propTypes = {
  /** A callback function. Receives an Algorand address 
   * and the result (true or false) */
  onLogin: PropTypes.func
}

export default Login;
