import { useSelector } from "react-redux";

function Jobs() {
  const state = useSelector(state => state);
  console.log('state: ', state);

  return ( 
    <div>Jobs comp</div>
  );
}

export default Jobs;