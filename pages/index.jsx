import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'; /*can ignore and use login.css or checkout.css*/
import checkout from './/checkout';
import login from './/login';


import { Checkbox, TextInput, Button } from '@mantine/core';
import { React, useEffect, useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	return (
		<>
			<head>
				<title>d.borrow App</title>
			</head>
			<div className="Title">
				<center>
					<h1>d.borrow App</h1>
				</center>
			</div>
			<div className="IndexBox">
				<p>Debug Menu (click a button)</p>
				<img src="/arrow.svg" />
				<Link href="/login">
          <a>
            <Button>Login Page</Button>
          </a>
				</Link>
				<img style={{ height: '20px' }} src="/line.svg" />
				<Link href="/checkout">
          <a>
            <Button>Item Checkout Page</Button>
          </a>
				</Link>
        <img style={{ height: '20px' }} src="/line.svg" />
				<Link href="/adminpanel">
          <a>
            <Button>Administration Console</Button>
          </a>
				</Link>
        <img style={{ height: '20px' }} src="/line.svg" />
				<Link href="/devices">
          <a>
            <Button>All Devices List</Button>
          </a>
				</Link>
			</div>
		</>
	);
}
