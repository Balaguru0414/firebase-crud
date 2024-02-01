import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Users = ({ getUpdateUser }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const userCollectionRef = collection(db, "users");

  const createUser = async (e) => {
    e.preventDefault();
    if (name !== "" && age !== "") {
      await addDoc(userCollectionRef, { name, age });
      alert("User Added SucessFully!!!");

      getUsers();
      setName("");
      setAge("");
    } else {
      alert("All fields are mandatory");
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    alert("Deleted SucessFully!!!");
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    const usersArray = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUsers(usersArray);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button onClick={createUser}>Create User</button>
      </form>

      {users.map((user) => (
        <div className="user" key={user.id}>
          {/* Details */}
          <h1>Name : {user.name}</h1>
          <h1>Age : {user.age}</h1>

          {/* Buttons */}
          <button
            onClick={() => {
              // getUpdateUser(user.id);
              getUpdateUser(user);
              navigate("/update");
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
