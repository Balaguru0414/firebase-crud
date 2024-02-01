// import React, { useState } from "react";
// import { useEffect } from "react";
// import { db } from "../firebase";
// import { doc, updateDoc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const Update = ({ userId }) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   const userDoc = doc(db, "users", userId);
//   const updateUser = async () => {
//     const user = await getDoc(userDoc);

//     setName(user.data().name);
//     setAge(user.data().age);
//   };

//   useEffect(() => {
//     updateUser();
//   }, [userId]);

//   const handleUpdate = () => {
//     updateDoc(userDoc, { name, age });

//     alert("Updated sucessfully!");
//     navigate("/");
//   };
//   return (
//     <div>
//       <input
//         className="input"
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         className="input"
//         type="number"
//         placeholder="Enter age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <button onClick={handleUpdate}>Update User</button>
//     </div>
//   );
// };

// export default Update;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Update = ({ user }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const userDoc = doc(db, "users", user.id);

  const handleUpdate = () => {
    if (name !== "" && age !== "") {
      updateDoc(userDoc, { name, age });

      setName("");
      setAge("");
      alert("Updated sucessfully!");
      navigate("/");
    } else {
      alert("All field are mandatory");
    }
  };
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
        <button onClick={handleUpdate}>Update User</button>
      </form>
    </div>
  );
};

export default Update;
