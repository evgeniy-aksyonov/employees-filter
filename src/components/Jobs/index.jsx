import Navigation from "components/common/Navigation";
import useFetch from "hooks/useFetch";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react";

function Jobs() {
  const {response, performFetch} = useFetch(JOBS);
  const {loading, data} = response;

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return <Navigation loading={loading} services={data} />;
}

export default Jobs;