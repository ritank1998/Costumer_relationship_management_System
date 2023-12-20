import { useEffect, useState } from 'react';

const ClientProp = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2102/crm/clients');
        if (response.ok) {
          const data = await response.text();
          const parsedData = JSON.parse(data); // Parse the fetched string into an array of objects
          setClients(parsedData);
          console.log("parsed data is :" , parsedData)
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {Array.isArray(clients) && clients.length > 0 ? (
        <table className="table table-bordered table-responsive">
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
