import React, { useEffect, useState, } from 'react';
import League from '../League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then(res => res.json())
            .then((data) => {
                const allLeagues = data.leagues
                const leagues15 = allLeagues.slice(0, 15)
                setLeagues(leagues15)
            })
    }, []);
    return (
        <div className="container mt-6 ms-6 ">

            {/* static banner image */}
            <div className="Background">

                {/* title */}
                <h1 className="text-light bg-dark d-flex justify-content-around">Sports Alpha</h1>
            </div>

            {/* condition based responsive */}
            {/* for desktop content */}
            <div className="deskContent">
                <div className="row row-cols-4 d-flex justify-content-center shadow-lg p-4 mb-4bg-body rounded" >
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
            {/* For phone content */}
            <div className="phoneContent">
                <div className="row" >
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;