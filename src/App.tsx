import React from 'react';
import './App.css';
import { Header } from './components/header'
import { Layout } from './components/layout'
import { ContactForm } from './components/contact';


function App() {
    return(
        <Layout>
        <Header />
        <ContactForm/>
        </Layout>
    )
}

export default App;
