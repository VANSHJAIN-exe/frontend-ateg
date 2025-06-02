import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import ModelShowcase from './components/ModelShowcase';
import FAQ from './components/FAQ';
import Editor from './components/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <Features />
            <ModelShowcase />
            <FAQ />
          </Layout>
        } />
        <Route path="/editor" element={
          <Layout>
            <Editor />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;