import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '@/pages/landing';
import Blog from '@/pages/blog/blog.jsx';
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
