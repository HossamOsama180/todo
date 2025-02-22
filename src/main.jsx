import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import store from "./redux/store.jsx"; // ✅ لاحظ الحرف الكبير
import { Provider } from 'react-redux'
import store from "./redux/store"; // ✅ استخدم الحروف الصغيرة

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App  />
  </Provider>,
)
