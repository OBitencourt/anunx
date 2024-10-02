

import React from 'react';
import PropTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import theme from '../src/theme';

export default function MyApp(props) {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Anunx</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    )
}

MyApp.PropTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
}