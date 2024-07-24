import React from 'react';
import './App.css';
import { Header } from './components/header'
import { Layout } from './components/layout'
import { FormData } from './components/contact'


function App() {
    return(
        <Layout>
        <Header />
        <FormData/>
        </Layout>
    )
}

export default App;
