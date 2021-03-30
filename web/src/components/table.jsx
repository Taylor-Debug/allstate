import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: { width: '80%'},
  table: {
    minWidth: 650,
    height: '50px'
  },
});

export function BasicTable(props) {
  const classes = useStyles();


  const columns = (props) => {
    const data = props.data
    return (
      data.map((row) => (
        <TableRow key={row.employee_id}>
          <TableCell component="th" scope="row">
            {row.employee_name}
          </TableCell>
          <TableCell align="right">{row.exercise_time}</TableCell>
          <TableCell align="right">{row.sleep_time}</TableCell>
          <TableCell align="right">{row.social_interaction_time}</TableCell>
          <TableCell align="right">{row.work_time}</TableCell>
        </TableRow>)))
  }

  const loading = () => {
    return (
      <div>Loading</div>
    )
  }

   const loadColumns = (props) => {
    if (props.data && props.data.length) {
      return columns(props)
    }
    else { return loading() }
  }


  return (

    <Table className={classes.root} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="default">
            <div className="thStyleL">
              <img src="img/employee.svg"></img>
              <span>Employee Name</span>
            </div>
          </TableCell>
          <TableCell align="right">
            <div className="thStyle">
              <img src="img/exercise.svg"></img>
              <span>Exercise</span>
            </div>
            </TableCell>
          <TableCell align="right">
            <div className="thStyle">
              <img src="img/sleep.svg"></img>
              <span>Sleep</span>
            </div>  
          </TableCell>
          <TableCell align="right">
            <div className="thStyle">
              <img src="img/social.svg"></img>
              <span>Social</span>
            </div>  
          </TableCell>
          <TableCell align="right">
            <div className="thStyle">
              <img src="img/work.svg"></img>
              <span>Work</span>
            </div>    
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colspan="5" class="tableHead">Data is displayed in hours.</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loadColumns(props)}
      </TableBody>
    </Table>
  );
}