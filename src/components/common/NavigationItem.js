import React, { useCallback } from 'react';
import { filterEmployees } from 'modules/app/actions';
import { selectAppState } from 'modules/app/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ListItemButton, ListItemText } from '@mui/material';

export default function NavigationItem({ id, jobId, title }) {
  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);
  const action = useCallback(() => {
    dispatch(filterEmployees(jobId));
  }, [jobId, dispatch]);

  return (
    <ListItemButton
      onClick={action}
      // selected={jobId === appState.selectedJob}
    >
      <ListItemText primary={title} />
    </ListItemButton>
  );
}
