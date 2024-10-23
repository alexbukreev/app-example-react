import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // Пример запроса на сервер для проверки Directory Traversal
    fetch('../../static/css/main.f855e6bc.css')
      .then(response => response.text())
      .then(data => {
        setServerData(data);  // Сохранение ответа сервера
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Отображение ответа сервера */}
        {serverData && <pre>{serverData}</pre>}
      </header>
    </div>
  );
}

export default App;
