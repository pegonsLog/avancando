import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 25 },
    { id: 2, name: "Carlos", age: 65 },
    { id: 3, name: "Paulo", age: 54 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {index} - {item}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </>
  );
};

export default ListRender;
