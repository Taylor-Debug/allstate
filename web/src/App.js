import React, { useState, useEffect } from 'react';
import './App.css';
import { BasicTable } from './components/table'
import { ChartX } from './components/piechart'
import axios from 'axios';

function App() {
  // const [data, setData] = useState([{"id": 1, "employee_id": 6298, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}, {"id": 2, "employee_id": 6299, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}]);
  
  const url = 'http://localhost:5000/' //Used to tell the AccessData method what information to get.
  //Main Table Data Call = Passed (data)
  const [data, setData] = useState([])
  const [dataLoad, setDataLoad] = useState(false)
  var emplyeeInfo = AccessData(data,setData,dataLoad,setDataLoad,url)

  /*
  const [data2, setData2] = useState([])
  const [dataLoad2, setDataLoad2] = useState(false)
  var emplyeeInfo2 = AccessData(data2,setData2,dataLoad2,setDataLoad2,url + "calcExercise")

  
  /*
  //Most Active Month Panel = Passed (data2)
  const [data3, setData3] = useState([])
  const [dataLoad3, setDataLoad3] = useState(false)
  var emplyeeInfo3 = AccessData(data3,setData3,dataLoad3,setDataLoad3,url + "highestMonth")
  console.log(emplyeeInfo3)
  //Total Amount of staff Panel = Passed (data2)
  const [data4, setData4] = useState([])
  const [dataLoad4, setDataLoad4] = useState(false)
  var emplyeeInfo4 = AccessData(data4,setData4,dataLoad4,setDataLoad4,url + "totalStaff")
  console.log(emplyeeInfo4)
  //Most Active Month Panel = Passed (data2)
  const [data5, setData5] = useState([])
  const [dataLoad5, setDataLoad5] = useState(false)
  var emplyeeInfo5 = AccessData(data5,setData5,dataLoad5,setDataLoad5,url + "avgEmployeeAge")
  console.log(emplyeeInfo5)
*/
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
            6,692.53
            <span>hours</span>
          </div>
        </div>
        <div className="statEntry">
          <h2>Most Active Month</h2>
          <div className="statData">
          May
          </div>
        </div>
        <div className="statEntry" id="staffCount">
          <h2>Total Amount of Staff</h2>
          <div className="statData">
            14
            <span>staff</span>
          </div>
        </div>
        <div className="statEntry">
          <h2>Average Age of Employees</h2>
          <div className="statData">
          44.21
          </div>
        </div>
      </div> 
      <div className="pieChart"></div>
    </div>
    
  );
}

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
