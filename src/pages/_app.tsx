import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import AgeCheck from '../components/AgeCheck';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{
      backgroundImage: 'url(/beta-bottle-concept.png)', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    }}>
      <Navbar />
      <Component {...pageProps} />
      <AgeCheck />
    </div>
  );
}

export default MyApp;
