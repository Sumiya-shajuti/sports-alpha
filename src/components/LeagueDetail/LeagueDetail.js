import maleImage from '../../Rectangle 28.png';
import femaleImage from '../../female.png';
import fbIcon from '../../Facebook.png';
import twIcon from '../../Twitter.png';
import youIcon from '../../YouTube.png';


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCompass, faFlag, faMars, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-solid-svg-icons'
import League from '../League/League';
import Image from '../../Rectangle 28.png'
const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [detail, setDetail] = useState({});


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.leagues[0]))

    }, [])
    return (

        <div className="text-center container">
            <div class="col-md-6 col-sm-12" >
                <img className="img-fluid" src={detail.strBadge} height="200px" width="600px" alt="" />
            </div>

            <div className="row">
                <div className="col-md-6 col-sm-12"
                >
                    <h1 className="text-danger">{detail.strLeague}</h1>
                    <h3><FontAwesomeIcon icon={faCompass} />Founded:{detail.dateFirstEvent}</h3>
                    <h3><FontAwesomeIcon icon={faFlag} />Country:{detail.strCountry}</h3>
                    <h3><FontAwesomeIcon icon={faMars} />Gender:{detail.strGender}</h3>
                </div>
                <div className="col-md-6 col-sm-12 ">
                    {
                        detail.strGender && detail.strGender === "male" ?
                            (
                                <img className="img-fluid w-70" src={femaleImage} alt="" />
                            ) :
                            (
                                <img className="img-fluid w-70" src={maleImage} alt="" />
                            )
                    }
                </div>
            </div>
            <p>  Details:{detail.strDescriptionEN}</p>
        </div>




    );

}
export default LeagueDetail;
