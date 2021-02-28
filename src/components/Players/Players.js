import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faGlobe, faFlag, faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Players = (props) => {
    // console.log(props)
    const { name, image, email, country, state, postCode, Role, Salary } = props.playerEle;
    const handleAddPlayer = props.handleAddedPlayer
    return (
        <body className="body-container mt-5 rounded">
            <div className="information-container">
                <div className="name-container pt-5 text-warning">
                    <h4> <span className="icon"><FontAwesomeIcon icon={faUser} /></span> Name : {name}</h4>
                    <h5><span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>Mail : {email}</h5>
                    <h5>Role : {Role}</h5>
                    <h5><span className="icon"><FontAwesomeIcon icon={faGlobe} /></span>Country : {country}</h5>
                    <h5><span className="icon"><FontAwesomeIcon icon={faFlag} /></span>State : {state}</h5>
                    <span>Post-code : {postCode}</span>
                    <h5>Auction Bid : <span className="icon"><FontAwesomeIcon icon={faDollarSign} /></span>{Salary}</h5>


                </div>
                <div className="hireButton">
                    <button onClick={() => handleAddPlayer(props.playerEle)} id="but" >Select</button>
                </div>
                <div className="image-container">
                    <img className="text-center" src={image} alt=""></img>

                </div>
            </div>
        </body>

    );
};

export default Players;