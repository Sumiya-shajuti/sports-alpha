import React, { useEffect, useState ,} from 'react';
import League from '../League';
import { useParams } from 'react-router';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then(res => res.json())
            .then((data) => {
                const allLeagues = data.leagues
                const leagues15 = allLeagues.slice(0,15)
                setLeagues(leagues15)
            })
        
    }, []);
   
    return (
        <div style={{ 
            backgroundImage: `url("https://www.lawinsport.com/media/zoo/images/The-stadium_01982368c4b5db6822abe729707173d7.jpeg")` 
          }}>
        <div className="container mt-5 ms-5 ">
            <h1 className="text-success d-flex justify-content-center ">Sports Alpha</h1>
            {/* <h1>Leagues: {leagues.length}</h1> */}
            <div className="row row-cols-4 bg-primary d-flex justify-content-center" >
            {
                leagues.map(league => <League league={league}></League>)
            }
        </div>
        </div>
        </div>
    );
};

export default Home;