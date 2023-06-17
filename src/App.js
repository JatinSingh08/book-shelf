import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Books, Search } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;
