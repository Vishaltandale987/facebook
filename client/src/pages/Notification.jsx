import  Axios  from "axios";
import React, { useState } from "react";


function Notification() {
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("")
  console.log(description)    

  const post = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("photo", image);
    formData.append("description", description);
    Axios.post("http://localhost:8080/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res.data);
    });

 
  };

  

  return (
    <div>
       <div>
      <input
        type="file"
        name="image"
        // value={formData.image}
        onChange={(e) => setimage(e.target.files[0]) }
      />
      <input type="text" onChange={(e) => setdescription(e.target.value)} />



      <button onClick={post}>image</button>

    </div>
    </div>
  )
}

export default Notification
