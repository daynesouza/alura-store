import React, { useState } from 'react';

//import interfaces
import { Iproduto } from '../types/produto';

//Import Styles
import '../reset.css';
import '../index.css';
import style from './style.module.scss';

//Import componets
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

function App() {
  const [produtos, setProdutos] = useState<Iproduto[]>([]);

  return (
    <div className='app'>
      <Header></Header>
      
      <Main 
        produtos={produtos}
        setProdutos={setProdutos}
      />

      <Footer></Footer>
    </div>
  );
}

export default App;
