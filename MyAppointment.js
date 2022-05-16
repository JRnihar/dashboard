import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appoinment, setAppoinment] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, [user]);

  return (
    <div>
      <h2>my appoinment {appoinment.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time </th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appoinment.map((a,index) => (
              <tr>
                <th>{index+1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}

            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
