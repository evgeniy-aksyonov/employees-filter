import { apiActions } from "modules/api/actions";
import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Jobs() {
  const state = useSelector(state => state.api[JOBS]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(apiActions.fetch(JOBS));
  
        const data = await api.fetch(JOBS);
    
        dispatch(apiActions.fetchSuccess(JOBS, data));
      } catch (error) {
        dispatch(apiActions.fetchFailure(JOBS, error));
      }
    }
    fetchData();
  }, []);

  console.log('state: ', state);

  return ( 
    <div>Jobs comp</div>
  );
}

export default Jobs;