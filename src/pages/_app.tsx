import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/svg/userIcon/style.css';

export default ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
