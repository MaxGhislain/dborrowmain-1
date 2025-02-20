import { React, useState } from "react";
import { Checkbox, TextInput, Button, AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme, Group, Paper, Divider } from '@mantine/core';
import { Calendar } from '@mantine/dates';

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



function Admin({ nameList, idList, avaList }) {
  const theme = useMantineTheme();
	return (
    <>
      <center>
        <h1>d.borrow Admin Panel</h1>
      </center>
        <Group className="amogus">
          {nameList.map((v, i) => { //value, index
          return(
            <Paper shadow="md" radius="lg" p="sm">
            <h1>{v}</h1>
            <h2>ID:{idList[i]}</h2>
            <h2>Avaliable:{avaList[i]}</h2>
            <Button>About</Button>
          </Paper>
          )
        })}
          <Paper shadow="md" radius="lg" p="sm">
            <h1>Item 78</h1>
            <h2>ID:122</h2>
            <h2>Available:No</h2>
            <Button>"Functional Button"</Button>
          </Paper>
        </Group>
       <a className="logoutLink" href="/">
          <Button class="logoutbutton">
            Return to index
          </Button>
       </a>
    </>
	);
}

export default Admin;