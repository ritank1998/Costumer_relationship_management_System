import React,{useState} from "react";
import { useEffect } from "react";
import "./indexpage.css"
const VisitorProp=()=>{
    const [visitors, setvisitors] = useState([]);

    const fetchData=async()=>{
  
      const response=await fetch('http://localhost:2102/crm/visitor',{
        method:"GET",
        header:{
          "Content-Type":"application/json"
        }
      })
      let data=response.json();
      return data;
    }
  
    useEffect(() => {
      fetchData().then((data)=>{
        console.log("data",data)
        setvisitors(data)
      }).catch((err)=>{
        console.log(err)
      })
    }, []);
  
    console.log("visitor", visitors)
    return (
        <>
         <div>
      {Array.isArray(visitors) && visitors.length > 0 ? (
        <table className="table table-bordered table-responsive myTable col-md-8 .mx-auto">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Visitor Name</th>
              <th scope="col">Visitor's Enquiry</th>
              <th scope="col">Visitor Email</th>
              <th scope="col">Visitor Contact Number</th>
              <th scope="col">Visited Date</th>
              <th scope="col">Next Date to Contact Visitor</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visit, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{visit.Name}</td>
                <td>{visit.Enquiry_Type}</td>
                <td>{visit.email}</td>
                <td>{visit.number}</td>
                <td>{visit.Date}</td>
                <td>{visit.Next_Date_Of_Contact}</td> {/* Use the appropriate date property */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
        </>
    )
}
export default VisitorProp