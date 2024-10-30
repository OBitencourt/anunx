

import React from 'react';
import propTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import theme from '../src/theme';

import { ToastyProvider } from '../src/contexts/Toasty'

import { SessionProvider } from 'next-auth/react';

export default function MyApp(props) {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Anunx</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <SessionProvider session={pageProps.session}>
                <ThemeProvider theme={theme}>

                    <ToastyProvider>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ToastyProvider>
                    
                </ThemeProvider>
            </SessionProvider>
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
}