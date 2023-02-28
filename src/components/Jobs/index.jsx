import useFetch from "hooks/useFetch";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";

function Jobs() {
  const {response, performFetch} = useFetch(JOBS);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  console.log('response: ', response);

  return ( 
    <div>Jobs comp</div>
  );
}

export default Jobs;