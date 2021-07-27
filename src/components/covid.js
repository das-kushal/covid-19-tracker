import React, { useEffect ,useState} from "react";
import { flushSync } from "react-dom";
import "./covid.css";
import logolive from "./logolive.jpeg";

const Covid = () => {
  const [data,setData]=useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="container" style={{overflow:"inherit"}}>
      <h3 className="live">
        <img className="logolive" src={logolive} alt="" />
        live
      </h3>
      <h2 className="container-fluid track">covid-19 tracker <br />{data.lastupdatedtime}</h2>
      <br />
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div className="col" >
          <div className="card text-white bg-primary ce mb-3" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Our </span>Country</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"2rem"}}>
                India 
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-success ce" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
            <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Total </span>Recovered</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"2rem"}}>
                {data.recovered}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-warning ce" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px",backgroundColor:"rgb(189, 117, 10)"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
            <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Total </span>Confirmed</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"2rem"}}>
               {data.confirmed} 
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-danger ce" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
            <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Total </span>Death</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"2rem"}}>
                {data.deaths}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white  ce" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px",backgroundColor:"rgb(10, 151, 144)"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
            <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Total </span>Active</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"2rem"}}>
                {data.active}
              </p>
            </div>
          </div>
        {/* </div>
        <div className="col">
          <div className="card text-white  ce" style={{maxWidth:"25rem",maxHeight:"18rem",paddingBottom:"20px",backgroundColor:"rgb(220, 216, 93)"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            {/* <div className="card-body">
            <h5 className="card-title tc shade" style={{fontSize:"1.7rem"}}><span style={{fontSize:"1.3rem"}}>Last </span>Updated</h5> 
              <p className="card-text tc shade b" style={{textTransform:"uppercase",fontSize:"1.5rem"}}>
                {data.lastupdatedtime}
              </p>
            </div> */}
          {/* </div> } */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Covid;
