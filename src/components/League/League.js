import React from 'react';
import './League.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
const League = (props) => {
    const { strLeague, strLeagueAlternate, strSport, idLeague } = props.league;
    const history = useHistory();
    // const handleClick = (idLeague) => {
    //     const url = `/id/${idLeague}`;
    //     history.push(url);
    // }
    const leagueStyle = {
        border: '1px solid brown',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    // home page
    return (
        <div style={leagueStyle}>
            <h2>{strLeague}</h2>
            <p>League Alternate: {strLeagueAlternate}</p>
            <p>Sport:{strSport}</p>
            <Link to={`/league/${idLeague}`}>
                <button type="button" class="btn btn-danger">Explore:{idLeague}<FontAwesomeIcon icon={faChevronCircleRight} /></button></Link>
        </div>
    );
};

export default League;