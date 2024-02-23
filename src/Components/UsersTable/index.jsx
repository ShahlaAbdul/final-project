import { useEffect, useState } from "react";
import "./style.scss";
import Button1 from "../Button1";
import { Link } from "react-router-dom";
function UsersTable() {
    const [usersData, setUsersData] = useState([]);
    
  useEffect(() => {
    getAllUsers();
  }, []);
  function getAllUsers() {
    fetch("http://localhost:3200/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }

  function handleDelete(id) {
    fetch(`http://localhost:3200/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    getAllUsers();
  }

  return (
    <section id="table">
      <table className="table">
        <thead>
          <tr>
            <th>FullName</th>
            <th>email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>age</th>
            <th>Delete &Edit</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item) => (
            <tr key={item._id}>
              <td>
                <div>
                  <span>Name</span>
                  <p> {item.fullName.name}</p>
                </div>
                <div>
                  <span>surname</span>
                  <p>{item.fullName.surname}</p>
                </div>
              </td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td>
                <i className="fa fa-trash" onClick={() => handleDelete(item._id)}></i>
                <Link to={"/user/update"}><Button1 text={"Edit"}></Button1></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UsersTable;
