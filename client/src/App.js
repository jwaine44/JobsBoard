import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailPage from './views/DetailPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="container mt-5">
      <h1>Jobs Board</h1>
      <Routes>
        <Route path = '/' element = {<Dashboard />} />
        <Route path = '/jobs/new' element = {<CreatePage />} />
        <Route path = '/jobs/:id' element = {<DetailPage />} />
        <Route path = '/jobs/edit/:id' element = {<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
