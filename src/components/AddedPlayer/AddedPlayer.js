import React from 'react';
import './AddedPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'


const AddedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer

    let hiredPlayerName = []
    let TotalSalary = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const element = selectedPlayer[i];
        hiredPlayerName = hiredPlayerName + element.name
        TotalSalary = TotalSalary + element.Salary
    }
    return (
        <div className="addedplayer">
            <div className="name-salary-container">
                <h4>  <span className="icon"><FontAwesomeIcon icon={faUser} /></span> Added Player : {selectedPlayer.length}</h4>
                <h5> <span className="icon"><FontAwesomeIcon icon={faFunnelDollar} /></span> Total Salary Required : {TotalSalary}</h5>
            </div>
            <div className="added-name-container">
                <li>{hiredPlayerName}</li>
            </div>

        </div>
    );
};

export default AddedPlayer;