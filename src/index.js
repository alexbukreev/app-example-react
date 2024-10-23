import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Инициализация React-приложения
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Пример запроса на сервер для тестирования уязвимостей
function testServer() {
  fetch('/../../etc/passwd') // Проверяем на Directory Traversal
    .then(response => response.text())
    .then(data => console.log('Server Data:', data))
    .catch(err => console.error('Error fetching /etc/passwd:', err));

  fetch('/proc/version') // Проверка версии ядра системы
    .then(response => response.text())
    .then(data => console.log('Kernel Version:', data))
    .catch(err => console.error('Error fetching /proc/version:', err));

  fetch('/var/log/nginx/access.log') // Попытка доступа к логам Nginx
    .then(response => response.text())
    .then(data => console.log('Nginx Logs:', data))
    .catch(err => console.error('Error fetching Nginx logs:', err));
}

testServer();

// Логирование метрик производительности приложения
reportWebVitals(console.log);
