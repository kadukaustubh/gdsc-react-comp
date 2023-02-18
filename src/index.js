import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Greetings from './Components/Greetings';
import Title from './Components/Title';
import Timer from './Components/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Hello" />
    <Greetings name="Kaustubh" />
    <Title header="Heading">
      <p>Some content.</p>
    </Title>
    <Timer />
  </React.StrictMode>
);
