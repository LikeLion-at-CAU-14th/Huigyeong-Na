import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './pages/BookList';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';

const App = () => {
  return (
    <div className="flex w-full min-h-[95vh] flex-col justify-center items-center gap-[30px]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />}>
          <Route path=':id' element={<BookDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;

