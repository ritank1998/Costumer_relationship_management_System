export const getClients = async () => {
    try {
        const response = await fetch('http://localhost:2102/crm/newclients');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};