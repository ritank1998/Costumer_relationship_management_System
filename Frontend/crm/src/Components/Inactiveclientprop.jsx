import React,{useState , useEffect} from "react";
const InactiveClientProp=(prop)=>{
    const [inactiveclients, setInactiveClients] = useState([]);

        const fetchData=async()=>{
      
          const response=await fetch('http://localhost:2102/crm/inactiveclients',{
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
            setInactiveClients(data)
          }).catch((err)=>{
            console.log(err)
          })
        }, []);
      
        console.log("Inactive clients",inactiveclients)
    
        
        return (
          <div>
            {Array.isArray(inactiveclients) && inactiveclients.length > 0 ? (
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
                  </tr>
                </thead>
                <tbody>
                  {inactiveclients.map((client, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{client.Name}</td>
                      <td>{client.email}</td>
                      <td>{client.number}</td>
                      <td>{client.Service}</td>
                      <td>{client.End_Date}</td> {/* Use the appropriate date property */}
                      <td>{client.Payment_Status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
        );
}
export default InactiveClientProp