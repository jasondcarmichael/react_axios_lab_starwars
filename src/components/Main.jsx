import { Route, Routes } from 'react-router-dom'
import Starships from './Starships'
import Characters from './Characters'
import Planets from './Planets'
import Home from './Home'

export default function Main () {

    return (
        <div className="main">
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/Starships" element={<Starships />}/>
                <Route exact path="/Characters" element={<Characters />} />
                <Route exact path="/Planets" element={<Planets />} />
            </Routes>
        </div>

            <h1 className="main-title"> Explore the Universe of Star Wars </h1>
            <h1 className="main-title"> & May the Force be With You! </h1>

        </div>


    )
}