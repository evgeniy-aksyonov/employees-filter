import { makeStyles } from '@mui/styles';
import Employees from 'components/Employees';
import Jobs from 'components/Jobs';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function AppContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Employees />
      </main>
    </div>
  );
}

export default AppContainer;
