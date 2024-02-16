
import './App.css';
import AuthorList from './AuthorList';
import BookList from './BookList';
import Header from './header';
import BookAdd from './BookAdd';
import AddAuthor from './AddAuthor';
import Updates from './UpdateBook';
import UpdateAuthor from './UpdateAuthor';
import SearchItems from './searchitems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Header />
      
      <Routes>
            
     
     <Route path="authorlist" element={<AuthorList/>}/>
     <Route path="/authorlist/update/:id" element={<UpdateAuthor />} />
     <Route path="books" element={<BookAdd />}/>
     <Route path="search" element={<SearchItems />}/>
     <Route path="/booklist/update/:id" element={<Updates />} />
     <Route path="booklist" element={<BookList />}/>
     <Route path="authors" element={< AddAuthor/>}/>
     
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
