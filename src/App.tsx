import React from 'react';
import './App.css';
import { Header } from './components/header'
import { ContactForms } from './components/contact'
import { Layout } from './components/layout'


function App() {
    return(
        <Layout>
        <Header />
        <ContactForms/>
        </Layout>
    )
}

export default App;
