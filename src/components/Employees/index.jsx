import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { EMPLOYEES } from "modules/api/endpoints";
import ProfileGrid from "components/common/ProfileGrid";

function Employees() {
  const {response, performFetch} = useFetch(EMPLOYEES);
  const {loading, data} = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  console.log('data: ', data);

  return ( 
    <ProfileGrid profiles={data} loading={loading} />
  );
}

export default Employees;