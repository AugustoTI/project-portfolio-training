import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Blog } from './pages/blog/Blog';
import { Works } from './pages/works/Works';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="works" element={<Works />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
