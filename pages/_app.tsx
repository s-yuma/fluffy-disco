// pages/_app.js
import React from 'react';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from '../components/Header';

 function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  );
}
export default MyApp;