import React from 'react';
import '@fontsource/open-sans';
import '@fontsource/staatliches';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}