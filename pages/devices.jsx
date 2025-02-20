//Spreadsheet Link: https://docs.google.com/spreadsheets/d/1arZbBuAS1wHhTjAoay7C5oa2DQV9DPBjjXz-vOnWkog/edit#gid=0

import { google } from 'googleapis';
import { Checkbox, Button } from '@mantine/core';
import Link from 'next/link';
//import './index.css';

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

function postC(){
  return(
    <div>
      <h1>postC</h1>
    </div>
  )
}

export default function Post({ nameList, idList, avaList }) {
  return (
    
    <div>
      <h1>All Devices</h1>
      
        {nameList.map((v, i) => { //value, index
          return(
            <div className="flexContainer">
                  <div className="image">image</div>
                  <div>
                    <h2>{v}</h2>
                    <p>Item ID: #{idList[i]}</p>
                    <p>Avaliable: {avaList[i]}</p>
                  </div>
                  
                </div>
          )
        })}
				<Link href="/">
          <a>
            <Button>Return to index</Button>
          </a>
				</Link>
      
    </div>
  );
}