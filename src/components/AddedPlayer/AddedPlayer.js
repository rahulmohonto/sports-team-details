import React from 'react';
import './AddedPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFunnelDollar, faDollarSign } from '@fortawesome/free-solid-svg-icons'


const AddedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer
    console.log(selectedPlayer)

    let hiredPlayerName = []
    let TotalSalary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const element = selectedPlayer[i];
        hiredPlayerName = hiredPlayerName + element.name
        TotalSalary = TotalSalary + element.Salary
    }
    return (
        <div className="addedplayer mt-5">
            <div className="name-salary-container">
                <h4>  <span className="icon"><FontAwesomeIcon icon={faUser} /></span> Added Player : {selectedPlayer.length}, {selectedPlayer.Salary}</h4>

                <h5> <span className="icon"><FontAwesomeIcon icon={faFunnelDollar} /></span> Total Salary Required : <span className="icon"><FontAwesomeIcon icon={faDollarSign} /></span>{TotalSalary}</h5>
            </div>
            <div className="added-name-container mb-6">
                <div>
                    <ul>
                        <li>{hiredPlayerName}</li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AddedPlayer;