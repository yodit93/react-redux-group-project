import { useSelector } from 'react-redux';
import React from 'react';
import './Profile.css';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.missions);
  return (
    <div className="profile-container">
      <div className="profile-missions-section">
        <h3 className="mission-lists">My Missions</h3>
        <ul className="mission-list">
          {missions.filter((mission) => mission.joined).map((mission) => (
            <li key={mission.id} className="mission-item">
              <span className="mission-name">{mission.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-rockets-section">
        <h3 className="my-rockets">My Rockets</h3>
        <ul className="rocket-list">
          {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              <span className="rocket-name">{rocket.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
