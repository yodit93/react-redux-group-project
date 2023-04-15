import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../Redux/Missions/missionsSlice';
import MissionList from '../Components/MissionLists';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);
  return (
    <>
      {isLoading && <h2>Loadding...</h2>}
      {error && <h2>{error}</h2>}
      <table className="missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionList key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
