import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './state/redux/store.js';
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
// import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CssBaseline/> */}
        <App />
    </Provider>
  </React.StrictMode>,
)
