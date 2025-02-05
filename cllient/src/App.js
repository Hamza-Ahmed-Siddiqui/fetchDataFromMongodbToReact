import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/getusers')
    .then(users => setUsers(users.data.users))
    .catch(err => console.log(err))
  })

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
      <table className="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Student Password</th>
          </tr>
        </thead>
        <tbody>
        {
            users.map(user => {
              return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>

            })
          }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
