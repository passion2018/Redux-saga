import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../constants';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const ListTask = [
  {
    id: 1,
    title: 'read 1',
    description: 'Read more',
    status: 0
  },
  {
    id: 2,
    title: 'read 2',
    description: 'Read more',
    status: 1
  },
  {
    id: 3,
    title: 'other',
    description: 'Read more',
    status: 2
  },
]

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon />Thêm mới công việc
      </Button>
        <Grid container spacing={3}>
          {
            STATUSES.map((item, index) => {
              const fiterListTask = ListTask.filter(list => list.status === item.value)
              return <Grid item xs={4} key={index}>
                <Paper className={classes.paper}>
                  {item.label}
                  {fiterListTask.map(tit => {
                    return <Card>
                      <CardContent>

                      </CardContent>
                      <CardActions>
                        <Button size="small" variant="contained" color="primary" className={classes.button}>x</Button>
                      </CardActions>
                    </Card>
                  })}
                </Paper>
              </Grid>
            })
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Task);