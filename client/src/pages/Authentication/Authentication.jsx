import React, { useEffect } from "react";
import "./Authentication.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constant/API_URL";

const Authentication = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const verif = async () => {
    try {
      let result = await Axios.patch(
        `${API_URL}/users/verif`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (result.data.length) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verif();
  }, []);
  return (
    <div className="loader-container">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Authentication;
