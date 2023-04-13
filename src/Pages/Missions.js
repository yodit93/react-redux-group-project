/* eslint-disable */
/* stylelint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../Redux/Missions/missionsSlice';
import MissionList from '../Components/MissionLists';

function Missions() {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  console.log('missions data', missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  
}

export default Missions;
