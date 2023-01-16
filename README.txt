To access graphql console, go to http://localhost:5000/graphql after 'npm start' on server

// Get clients id and name
{ 
clients {
  id
 name 
}
}

// Add project to a client
mutation {
addProject(name: "Mobile App", description: "Description", status: new, clientId: "63c20ab68af94229b10c09b5") {
name
id
}
}

// Get project data
{
projects {
id
name
status
client {
name, 
email
}
}
}

// Update project
mutation {
updateProject(id: "63c56a45af829d3e8aa35303", name: "Mobile Application", status: completed) {
name
status
}
}

---
Client

Install the following dependencies on client:
npm i @apollo/client graphql react-router-dom react-icons