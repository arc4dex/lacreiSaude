import { useState } from 'react';
import './App.css';
import "./assets/css/index.css";
import Header from './components/header';
import Home from './components/home';
import User from './components/user';
import Professional from './components/professional';
import Footer from './components/footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/translations/index';


function App() {
  const [page, setPage] = useState()

  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Header setPage={setPage}/>
      {page === "user" ? <User/> : page === "professional" ? <Professional/> : <Home setPage={setPage}/>}
      <Footer setPage={setPage}/>
    </div>
    </I18nextProvider>
  );
}

export default App;
