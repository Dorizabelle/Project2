
import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';
// import Display from './Display.js';

export default function App() {
  const [name, setName] = useState('Julie');
  const [age, setAge] = useState('test');
  const [age2, setAge2] = useState('test2');
  //var state = { name: 'Julie', age: 'aging well', weight: 180 };

  const clicker = (name) => {
    setName(name);
    // if (name.localeCompare('Daniel') === 0) {
    //   setAge('TOO OLD!!');
    //   setWeight(200);
    // } else {
    //   setAge('not as old as Daniel');
    //   setWeight(150);
    // }
    axios.post("http://localhost:2400/api/auth/signup", {
      name: name
      // password: password
    })
      .then((response) => {
        setAge(String(response.data));
      });
  }

  const clicker2 = (name) => {
    const teamname = name
    setName(name)
    // if (name.localeCompare('Daniel') === 0) {
    //   setAge('TOO OLD!!');
    //   setWeight(200);
    // } else {
    //   setAge('not as old as Daniel');
    //   setWeight(150);
    // }
    const res = axios.get("http://localhost:2400/api/auth/array", {
      name: teamname
      // password: password
    })
    console.log(res);
    setAge2(String(res.response));
    // .then((response) => {
    //   setAge2(String(response.data));
    // });
  }


  return (
    <div>
      <div>team name: <input type="text" id="fname" name="fname" /></div>
      <button onClick={() => clicker(document.getElementById('fname').value)}>
        {name}
      </button>
      <h1>{age}</h1>
      <div>team name: <input type="text" id="jname" name="jname" /></div>
      <button onClick={() => clicker2(document.getElementById('jname').value)}>
        check clues
      </button>
      <h1>{age2}</h1>
    </div>


  )
}

  // btn.addEventListener("click", () => {
  //   const email = emailInput.value;
  //   const password = passwordInput.value;

  // axios.post("https://reqres.in/api/login", {
  //   email: email,
  //   password: password
  // })
  //   .then((response) => {
  //     console.log(response);
  //   });
  // });

  // const state = { name: name, age: age };

  // return (
  //   <div>

  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/:clueURLStem" element={<Signup></Signup>}></Route>
  //         <Route path="/" element={<div>Leaderboard goes here</div>} />
  //         <Route path="/leaderboard" element={<div>Leaderboard goes here</div>} />
  //       </Routes>

  //     </BrowserRouter>


  //   </div>


  // )

