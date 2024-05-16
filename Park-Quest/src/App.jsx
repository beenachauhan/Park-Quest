import { useState } from 'react'
import Main from './Components/Main';
import './App.css'

function App() {
  const[page, setpage] =useState('Home');
  
  const [themeMode, setThemeMode] = useState('light');

  const [payment, setPayment] = useState(0);
  

  function go(targetpage){
    setpage(targetpage);
  }

  function onNav(event){
    event.preventDefault();
    const target =event.target.dataset.page;
    go(target);
  }

  function toggleTheme(){
    const mode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(mode);
  }

  function handlePayment(newPayment){
    setPayment(payment + newPayment);
  };

  return (
    <div className ={`app ${themeMode}`}>
     <Main page={page} onNav={onNav} theme={themeMode} toggleTheme={toggleTheme} handlePayment={handlePayment} payment={payment}/> 
    </div>
  )
}

export default App
