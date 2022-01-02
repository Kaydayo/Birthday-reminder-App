import './App.css';
import { data } from './data'
import React, { useState } from 'react'

function App() {
  const [peoples, setPeoples] = useState(data)

  const clearReminder = () => {
    setPeoples([])
  }
  const clearPeople = (peoplename) => {
    const newPeople = peoples.filter(peeps => peeps.name !== peoplename)
    setPeoples(newPeople)

  }
  const printYear = (yearInNum) => {
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[yearInNum]

  }

  return (
    <div className="content">
      <h1>Birthday Reminder App</h1>
      <div className="ruler"></div>
      <div className="card">
        {peoples.map((people, i) =>
          <div key={`people${i}`} className="people-card">
            <div><img src={people.img} alt="" /></div>
            <div style={{ textAlign: 'left' }}><h4>Today is <span style={{ color: 'blue' }}>{people.name}</span> birthday <span className="clear" onClick={() => clearPeople(people.name)}>&times;</span></h4>
              <h6>{`Born on ${people.DOB.getDate()},${printYear(people.DOB.getMonth())},${people.DOB.getFullYear()}`}</h6>
            </div>
          </div>
        )}
      </div>
      <button className="btn" onClick={clearReminder}>Clear Reminder</button>
    </div>
  );
}

export default App;
