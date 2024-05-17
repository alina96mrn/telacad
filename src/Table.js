import React, { useState, useEffect } from "react";

import './App.css';

const Table = () => {
  const [errors, setErrors] = useState(false);
  const [trainers, setTrainers] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://4.175.81.109:3000/api/trainers");
      res
        .json()
        .then(res => setTrainers(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <hr />
      <table cellpadding="0" cellspacing="0" width="100%">
     	<tr>
           {trainers.data ? trainers.data.map( (elem, idx)=>{ 
             return <td> 
               {elem.Name} 
               <br />
               <img width="100%" height="100%" src={elem.UrlPhoto} alt="trainer" />
               {elem.Course}
               </td> 
            }) : null}
	    </tr>
      </table>
      <hr />
      <p>Other products:</p>
      <img width="450px" height="450px" src="http://telacadstorageaccount28.blob.core.windows.net/telacad/promo.png" alt="promo" />
      {errors}
    </div>
  );
};

export default Table;
