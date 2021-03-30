import React, { useState, useEffect } from 'react';
import './App.css';
import { BasicTable } from './components/table'
import { Example } from "./components//charts"
import { CustomizedTimeline } from './components/timeline'
import { ChartX } from './components/piechart'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  // const [data, setData] = useState([{"id": 1, "employee_id": 6298, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}, {"id": 2, "employee_id": 6299, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}]);
  
  const useStyles = makeStyles({
    root: { width: '100%', overflowY: "auto" },
    table: {
      minWidth: 650,
      height: '100%',
      overflowY: "hidden",
      top: "100px"
    }
  });
  
  const classes = useStyles();   
  const [data, setData] = useState([]) 
  const [dataLoad, setDataLoad] = useState(false)


  const url = 'http://localhost:5000/' //Used to tell the AccessData method what information to get.
  //Method call to access the data, to access returned data - use data var
  var emplyeeInfo = AccessData(data,setData,dataLoad,setDataLoad,url)
  console.log("Emplyee Info")
  console.log(emplyeeInfo)

  return (
    <div className="App">
      <div className="navBar">
        <div className="navBarLogo">
          <img src="img/logo.svg" alt="Mental Health App Logo"></img>
          <span>Mental Health App</span>
        </div>
        <div className="navLinks">
          <a>
            <img src="img/account.svg"></img>
            <span>Profile</span>
          </a>
          <a className="c2a">
            <span>Logout</span>
            <img src="img/logout.svg"></img>
          </a>
        </div>
      </div>
      <div className="employeeTableWrap">
        <BasicTable data={data}/>
      </div>

      <div className="stats">
        <div className="statEntry">
          <h2>Total Exercise Hours</h2>
          <div className="statData">
            0000.00
            <span>hours</span>
          </div>
        </div>
        <div className="statEntry">
          <h2>Most Active Month</h2>
          <div className="statData">
            January
          </div>
        </div>
        <div className="statEntry">
          <h2>Total Amount of Staff</h2>
          <div className="statData">
            0000
            <span>staff</span>
          </div>
        </div>
        <div className="statEntry">
          <h2>Average Age of Employees</h2>
          <div className="statData">
            00.00
          </div>
        </div>
      </div> 
      <div className="pieChart">
        <h2 className="textCenter">Pie Chart</h2>       
        <ChartX/>
      </div>
    </div>
    
  );
}

//Getting the data from the URL
function AccessData(data,setData,dataLoad,setDataLoad,url){
  //useState = the state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
    useEffect(async () => {
      const result =  await axios({
        url: url,
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
        responseType: 'json',
        })
   
      setData(result.data)
      console.log(data)
      setDataLoad(true);
    },[dataLoad]);
  return data;
}

export default App;
