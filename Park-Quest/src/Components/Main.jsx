import Home from "./Home";
import TopDeals from "./TopDeals";
import Reviews from "./Reviews";
import Feedback from "./Feedback";
import LocalCuisine from"./LocalCuisine";



function Main({ page, onNav, theme, toggleTheme, payment, handlePayment }) {
  return (
    <main className="main">
      {page==='Home' && <Home onNav={onNav} page={page}/>}
      {page==='TopDeals' && <TopDeals onNav={onNav} theme={theme} toggleTheme={toggleTheme} handlePayment={handlePayment} payment={payment}/>}
      {page === 'Reviews' && <Reviews onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      {page === 'Feedback' && <Feedback onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      {page === 'LocalCuisine' && <LocalCuisine onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      
    </main>
  )
}
export default Main;