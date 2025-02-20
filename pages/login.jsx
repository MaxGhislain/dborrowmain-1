import React, { useState } from 'react';

//Redirecting to other Pages
//import { Route, Redirect } from 'react-router';

import { Checkbox, TextInput, Button } from '@mantine/core';

function Login() {

  const [emailVariable, setEmailVariable] = useState('');
  const [passVariable, setPassVariable] = useState('');
  let [testVariable, setTestVariable] = useState("emailwords");
  let [ptestVariable, setPTestVariable] = useState('passwords');

  let [tosVariable, setTOSVariable] = useState(false);

  let [showLink, setShowLink] = useState(false);

  function emailCheck() {
    console.log("emailCheck has been Run");
    if (emailVariable !== '' && emailVariable.includes('@')) {
      setTestVariable("Email gotten");
      return true;
    } else {
      setTestVariable("Email not received");
      return false;
    }
  }

  function passCheck() {
    console.log("passCheck has been Run");
    if (passVariable !== '') {
      setPTestVariable("Pass gotten");
      return true;
    } else {
      setPTestVariable("Pass not gotten");
      return false;
    }
  }

  function emailAndPassCheck() {
    
    console.log("email&PAssCheck has been Run");
    let emailBoolean = emailCheck();
    let passBoolean = passCheck();

    if (emailBoolean && passBoolean && tosVariable) {
      setShowLink(true);
    } else {
      setShowLink(false);
    }
  }
  
	return (
		<>
			<div className="Title">
        <center>
			  	<h1>Login Page</h1>
				  <h2>d.borrow v1.0</h2>
        </center>
			</div>
			<div className="mainBox">
				<div className="TOSBox">
					<p>
						By using the Design Tech High School RFID item check-out system you
						agree to the following terms and conditions, including, but not
						limited to:
					</p>
					<ul>
						<li>return items on time</li>
						<li>do not vandalize items</li>
						<li>report broken devices immediately</li>
						<li>do not replace parts of a borrowed item</li>
					</ul>
					<Checkbox checked={tosVariable} onChange={(event) => setTOSVariable(event.currentTarget.checked)} label="I agree to the Design Tech High School RFID item check-out system terms and conditions." />
				</div>
        <div className="loginBox">
          <TextInput value={emailVariable} onChange={(event) => setEmailVariable(event.currentTarget.value)} placeholder="Your Email" label="Email" required/>          
          <TextInput value={passVariable} onChange={(event) => setPassVariable(event.currentTarget.value)} placeholder="Your password..." label="Password" required/>
          <p className="gbox">Google Sign-In not yet complete</p>
        </div>
			</div>
      <center>
        <div className="loginButton">
          <Button onClick={() => emailAndPassCheck()}>Submit</Button>
        </div>
        { (showLink) ? 
          <div className="bottomLink">
          <a href="https://dborrowcheckout.vitamoon.repl.co/">
              <p style={{color: "#000000"}}>To Checkout Page --></p>
          </a>
        </div>
          :
          <div className="bottomLink">
            <p style={{color: "#bbbbbb"}}>To Checkout Page --></p>
        </div>
        }
      </center>
		</>
	);
}

/*
{ (showLink) ? 
          <Redirect to="https://dborrowcheckout.vitamoon.repl.co/"/>
          : 
          
        }
*/

/*
<div className="bottomLink">
          <a href="https://dborrowcheckout.vitamoon.repl.co/">
            <center>
              <p style={{color: "#000000"}}>To Checkout Page --></p>
            </center>
          </a>
        </div>
      */

/*
<div className="bottomLink">
          <center>
            <p style={{color: "#bbbbbb"}}>To Checkout Page --></p>
          </center>
        </div>
      */
      
/*
<h2>Email: {emailVariable}</h2>
<h2>Pass: {passVariable}</h2>
<h2>Test: {testVariable}</h2>
<h2>Test: {ptestVariable}</h2>
*/

/*
<div className="bottomLink">
          <a href="https://dborrowcheckout.vitamoon.repl.co/">
            <center>
              <p>link to checkout page</p>
            </center>
          </a>
        </div>
*/

export default Login;
