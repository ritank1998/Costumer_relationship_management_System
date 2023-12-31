import { useEffect, useState } from 'react';
import "./indexpage.css"
const ClientProp = (prop) => {
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
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Service</th>
              <th scope="col">Expiry Date</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{client.Name}</td>
                <td>{client.email}</td>
                <td>{client.number}</td>
                <td>{client.Service}</td>
                <td>{client.End_Date}</td> {/* Use the appropriate date property */}
                <td>{client.Payment_Status}</td>
                <td>{client.transaction_Id}</td>
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