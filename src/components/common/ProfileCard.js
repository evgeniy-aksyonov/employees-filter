import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '4px 24px',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ProfileCard({ src, title, subSpecialties }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.avatar}>
          <Avatar alt={title} src={src} />
        </div>
        <div>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {subSpecialties && subSpecialties.length > 0
                ? subSpecialties
                : ' - '}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

ProfileCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  subSpecialties: PropTypes.string,
};
