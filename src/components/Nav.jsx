import { Link } from 'react-router-dom'

export default function Nav () {

    return (
        <div>
        <div className="nav">
            <Link to="/"> <h2>Home</h2> </Link>
            <Link to="Starships"> <h2>Starships</h2> </Link>
            <Link to="Characters"> <h2>Characters</h2> </Link>
            <Link to="Planets"> <h2>Planets</h2> </Link>
        </div>

    
        </div>


    )
}