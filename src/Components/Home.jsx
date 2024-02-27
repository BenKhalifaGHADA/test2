import { Link, useParams, useSearchParams } from "react-router-dom";

function Home() {
    const {username}=useParams()
    
    
    return ( <>
    
     Home page , le paramètre est {username}
     <Link to="/about" reloadDocument={true}>Home</Link>
     <Link to="/contact" replace={true}>Contact</Link>
     <Link to="/about">About</Link>

    </> );
}

export default Home;