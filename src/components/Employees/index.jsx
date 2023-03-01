import { useEffect, useMemo } from "react";
import useFetch from "hooks/useFetch";
import { EMPLOYEES } from "modules/api/endpoints";
import ProfileGrid from "components/common/ProfileGrid";
import { useSelector } from "react-redux";
import { selectAppState } from "modules/app/selectors";

function Employees() {
  const {response, performFetch} = useFetch(EMPLOYEES);
  const {loading, data} = response;
  const appState = useSelector(selectAppState);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }
    if (!appState.selectedJob) {
      return data;
    }

    return data.filter(employee => employee.job === appState.selectedJob)
  }, [data, appState.selectedJob])

  return ( 
    <ProfileGrid profiles={filteredData} loading={loading} />
  );
}

export default Employees;