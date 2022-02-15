import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
    <Link to="/">home</Link>
    </>
  );
}

export default App;
