import maleImage from '../../Rectangle 28.png';
import femaleImage from '../../female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { faCoffee, faCompass, faFlag, faMars, faCaretSquareRight, faEnvelope, faFutbol } from '@fortawesome/free-solid-svg-icons'
import './LeagueDetail.css';

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
            <div className="Background">
                {/* dynamic banner image */}
                <img className="img-fluid " src={detail.strBanner} height="1200" width="800" alt="" />
                <p>
                    <br />
                    {/* dynamic logo */}
                    <img className="img-fluid top-0 end-0 left top repeat " src={detail.strBadge} height="80px" width="150px" alt="" />
                </p>
            </div>

            {/* team details */}
            <div className="row p-3 mb-2 bg-danger text-white">
                <div className="col-md-6 col-sm-12" >
                    <h1 className="text-dark">{detail.strLeague}</h1>

                    {/* fontawesome icon */}
                    <h3><FontAwesomeIcon icon={faCompass} />Founded:{detail.dateFirstEvent}</h3>
                    <h3><FontAwesomeIcon icon={faFlag} />Country:{detail.strCountry}</h3>
                    <h3><FontAwesomeIcon icon={faFutbol} />Sport Type:Football</h3>
                    <h3><FontAwesomeIcon icon={faMars} />Gender:{detail.strGender}</h3>
                </div>
                {/* gender based image */}
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
                {/* league description */}
            </div>
            <p>
                Details:{detail.strDescriptionEN}</p>
            <div className="row">
                <div className="col-md-6 col-sm-12 ">

                    {/*  font awesome brand icon*/}
                    <h3><a class="button" href="https://www.programming-hero.com/">
                        <FontAwesomeIcon icon={faFacebookF} /></a></h3>
                </div>
                <div className="col-md-1 col-sm-12  ">
                    <h3><a class="button" href="https://www.programming-hero.com/">
                        {/* fontawesome icon */}
                        <FontAwesomeIcon icon={faCaretSquareRight} /> </a></h3>
                </div>
                <div className="col-md-5 col-sm-12  ">
                    <h3><a class="button" href="https://www.programming-hero.com/">
                        {/* fontawesome icon */}
                        <FontAwesomeIcon icon={faEnvelope} /></a></h3>
                </div>
            </div>
        </div>
    );

}
export default LeagueDetail;
