import { React, useState } from "react";
import { Checkbox, Button } from '@mantine/core';
import CheckoutItem from './components/CheckoutItem.jsx';
import TextField from "@mui/material/TextField";
import List from "./components/List";
import Link from 'next/link';

import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const SHEET_ID = "1arZbBuAS1wHhTjAoay7C5oa2DQV9DPBjjXz-vOnWkog";

  
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A2:A',
  });

  const nameList = response.data.values.flat();
  console.log("Name List: ", nameList);

  const response2 = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!B2:B',
  });

  const idList = response2.data.values.flat();
  console.log("Idlist: ", idList);

  const response3 = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!C2:C',
  });

  const avaList = response3.data.values.flat();
  console.log("Avalist: ", avaList);

  return {
    props: {
      nameList,
      idList,
      avaList
    },
  };
}



function checkinItem(checkoutIdList, id){
  let index = checkoutIdList.indexOf(id);
  if (index > -1) {
    setIdList(checkoutIdList.splice(index, 1));
  }

  
}

function App({ nameList, idList, avaList }) {
// not sure why input isn't working, see https://dev.to/salehmubashar/search-bar-in-react-js-545l
  let [checkoutIdList, setIdList] = useState([3, 5]);
  
	return (
		<>
      <h1>Item Search</h1>
        <div className="checkoutSearchbar">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search">
          </TextField>
        </div>
      <h1>Checkouts:</h1>
      
      {checkoutIdList.map((v, i) => { //value, index
          return(
            <div className="flexContainer">
                  <div className="image">image</div>
                  <div>
                    <h2>Computer{checkoutIdList[i]}</h2>
                    <p>Item ID: #{checkoutIdList[i]}</p>
                    
                  </div>
                  <div onClick={() => checkinItem(checkoutIdList, idList[i])}>
                    <Button>Check in</Button>
                    
                  </div>
                </div>
          )
        })}
				<Link href="/">
          <a>
            <Button>Return to index</Button>
          </a>
				</Link>
      
    </>
	);
}

export default App;




