import logo from './logo.svg';
import './App.css';
import AuthorList from './AuthorList';
import BookList from './BookList';

function App() {
  return (
    <div >
      
     <h1>virtual Library</h1>
     <BookList />
     <AuthorList />
    </div>
  );
}

export default App;
