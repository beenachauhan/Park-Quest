import '../assets/css/Home.css'


function Home({onNav}) {
    return(
        <div className="main-section">
            <div className="landing-section">
                <h1 className="section-description">Embark on a Journey of Discovery with Park-Quest: Your Gateway to National Park Adventures</h1>
                <button className="explore-button" onClick={onNav} data-page='TopDeals'>
                    Lets Start our Journey ➡️
                </button>
            </div>
        </div>

    );

    

}

export default Home