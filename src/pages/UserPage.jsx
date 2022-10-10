import React, { useEffect, useState } from "react";
import axios from "axios";
import ListUser from "../components/ListUser";

export default function UserPage() {
  // state
  const [users, setUsers] = useState([]);

  // component did mount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full min-h-screen ">
      <h1 className="text-4xl font-medium mb-6 text-cyan-600">Users Page</h1>
      <table className="w-full">
        <thead className="h-12 bg-white ">
          <tr>
            <th className="text-center px-2 font-medium">id</th>
            <th className="text-left font-medium">username</th>
            <th className="text-left font-medium">email</th>
            <th className="text-left font-medium">phone</th>
            <th className="text-left font-medium">website</th>
            <th className="text-center font-medium">action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <ListUser key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
