/* eslint-disable */
/* stylelint-disable */
import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.missions);
  return (
    <div className="profile-container">
      <div className="profile-missions-section">
        <h3 className="mission-lists">My Missions</h3>
        <ul className="mission-list">
          {missions.map((mission) => {
            if (mission.joined) {
              return (
                <li key={mission.id} className="mission-item">
                  <span className="mission-name">{mission.name}</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="profile-rockets-section">
        <h3 className="my-rockets">My Rockets</h3>
        <ul className="rocket-list">
          {rockets.map((rocket) => {
            if (rocket.reserved) {
              return (
                <li key={rocket.id} className="rocket-item">
                  <span className="rocket-name">{rocket.name}</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
