import React from 'react';
import { Button } from '@mantine/core';

// Add your component here
// You can start by copying your code

function CheckoutItem(props) {
  return (
    <>
      <div className="flexContainer">
        <div className="image">image</div>
        <div>
          <h2>(Itemname) (Itemnumber)</h2>
          <p>Item ID:</p>
          <p>Borrowed for (dayshours1)</p>
          <p>Due (datetime2) ((dayshours2))</p>
        </div>
        <div className="flexVertical">
          <a href="mailto:dborrow@dtechhs.org?subject=Extend%20registration%20for%20a%20borrowed%20item">
            <div className="redirectExtend">
                <Button>Extend registration</Button>
            </div>
          </a>
           <a href="mailto:dborrow@dtechhs.org?subject=Returning%20borrowed%20item%20early">
              <div className="redirectReturn">
                <Button>Mark as returned</Button>
              </div>
          </a>
          <a href="mailto:dborrow@dtechhs.org?subject=Need%20help%20with%20a%20borrowed%20item">
            <div className="redirectReport">
              <Button>Get help / report issue</Button>
            </div>
          </a> 
        </div>
      </div>
    </>
  )
  
}

export default CheckoutItem;