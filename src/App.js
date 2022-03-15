import React from 'react'
import { Sidebar } from './components/sidebar';
import { Header } from './components/Header'
import { Container } from './components/Container';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='w-screen'>
        <Header />
        <Container />
      </div>
    </div>
  );
}

export default App;
