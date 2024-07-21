import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useRoutes } from 'react-router-dom'
import { routes } from './routes';
function App() {
  const appRoute=useRoutes(routes)
  return (
    <div className="App">
      <Header/>
      {appRoute}
    </div>
  );
}

export default App;
