import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // Запрос к доступному статическому файлу App.css
    fetch('/static/css/main.f855e6bc.css') // Путь может отличаться в зависимости от сборки. Проверяем этот путь.
      .then(response => response.text()) // Преобразуем ответ в текст
      .then(data => {
        setServerData(data); // Сохраняем данные с сервера в состояние
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
        {serverData && <pre>{serverData}</pre>} {/* Если данные получены, они будут отображены здесь */}
      </header>
    </div>
  );
}

export default App;
