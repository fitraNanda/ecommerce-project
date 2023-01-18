import React, { useState } from "react";
import "./Admin.scss";
import Axios from "axios";

const Admin = () => {
  const [fileInput, setFileInput] = useState({
    fileName: "",
    addFile: null,
  });

  function inputEditImage(e) {
    let { name, files } = e.target;
    setFileInput((prev) => {
      return { ...prev, [name]: files[0] };
    });

    setFileInput((prev) => {
      return { ...prev, fileName: files[0].name };
    });
  }

  function addFile() {
    if (fileInput.addFile) {
      let formData = new FormData();

      let obj = {
        title: "malam",
        description: "ok",
      };

      formData.append("data", JSON.stringify(obj));
      formData.append("file", fileInput.addFile);

      Axios.post("http://localhost:3300/products/upload", formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(formData);
    }
  }

  return (
    <div>
      <input onChange={inputEditImage} name="addFile" type="file" />
      <button onClick={addFile}>submit</button>
    </div>
  );
};

export default Admin;
