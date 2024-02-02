import logo from './logo.svg';
import './App.css';
import AuthorList from './AuthorList';
import BookList from './BookList';
import Header from './header';
import BookAdd from './BookAdd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Header />
      <h1>virtual Library</h1>
      <Routes>
            
     
     <Route path="authors" element={<AuthorList/>}/>
     <Route path="books" element={<BookAdd />}/>
     <Route path="booklist" element={<BookList />}/>
     
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
