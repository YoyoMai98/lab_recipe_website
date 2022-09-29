import './App.css';
import Title from './components/Title';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  return (
    <>
      <header>
      <Title />
      <ul>
        <Navigation />
        <SearchBar />
      </ul>
      </header>
      <main>
        <Display />
      </main>
      <footer>
        <Form />
      </footer>
    </>
  );
}

export default App;
