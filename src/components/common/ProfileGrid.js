import { makeStyles } from '@mui/styles';
import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    padding: '10px',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '33.33%',
    },
  },
}));

export default function ProfileGrid({ profiles = [], loading }) {
  const classes = useStyles();

  if (loading || !profiles) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      {profiles.map((profile) => (
        <div key={profile.id} className={classes.item}>
          <ProfileCard
            src={profile.avatar}
            title={profile.name}
            subSpecialties={profile.job}
          />
        </div>
      ))}
    </div>
  );
}
