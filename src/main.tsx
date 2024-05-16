import React from 'react'
import ReactDOM from 'react-dom/client'
import 'uikit/dist/css/uikit.min.css';
import './index.css'
import App from './App.tsx'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
