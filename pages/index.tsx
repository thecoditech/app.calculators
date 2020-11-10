import Head from 'next/head'
import React from 'react'

import Layout from '../src/Layout'

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        Home
      </Layout>
    </>
  );
}
