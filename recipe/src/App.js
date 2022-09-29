import './App.css';
import Title from './components/Title';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <Title />
      <ul>
        <Navigation />
        <SearchBar />
      </ul>
    </div>
  );
}

export default App;
