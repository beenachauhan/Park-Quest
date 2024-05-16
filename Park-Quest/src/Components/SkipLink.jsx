import '../assets/css/SkipLink.css';

function Skiplink({onNav}){
    return(
            <a 
            href={`#TopDeals`}
            onClick={onNav}
            data-page={'TopDeals'}
            className="Skiplink"
        >
            Skip to main content
        </a>  
    )
}
export default Skiplink;