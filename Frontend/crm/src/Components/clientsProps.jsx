import { useEffect, useState } from 'react';
import "./indexpage.css"
const ClientProp = () => {
  const [clients, setClients] = useState([]);

  const fetchData=async()=>{

    const response=await fetch('http://localhost:2102/crm/clients',{
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
      setClients(data)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  console.log("clients",clients)
  return (
    <div>
      {Array.isArray(clients) && clients.length > 0 ? (
        <table className="table table-bordered table-responsive myTable col-md-8 .mx-auto">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Client Name</th>
              <th scope="col">Client Email</th>
              <th scope="col">Client Contact Number</th>
              <th scope="col">Plan Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{client.Name}</td>
                <td>{client.email}</td>
                <td>{client.Number}</td>
                <td>{client.End_Date}</td> {/* Use the appropriate date property */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ClientProp;