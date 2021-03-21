import React from 'react';
import './MiddleContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faMapMarker, faCloudSun } from '@fortawesome/free-solid-svg-icons';

const MiddleContainer = () => {
    return (
        <div className="info-holder">
            <div className="middle-info-one">
                <h1 className="dots">...</h1>
                <FontAwesomeIcon className="icons" icon={faComments} />
                <h1>2564</h1>
                <h5>Messages</h5>
                <p>posted by our users</p>
            </div>
            <div className="middle-info-two">
                <h1 className="dots">...</h1>
                <FontAwesomeIcon className="icons" icon={faMapMarker} />
                <h6>17/2 Mohakhli</h6>
                <h6>Dhaka, Bangladesh</h6>
            </div>
            <div className="middle-info-three">
                <h1 className="dots">...</h1>
                <FontAwesomeIcon className="icons" icon={faCloudSun} />
                <h1>18 C</h1>
                <h5>Dhaka, Bangladesh</h5>
                <p>Sunny and Raining</p>
            </div>
        </div>
    );
};

export default MiddleContainer;