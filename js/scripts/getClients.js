document.getElementById('button1').addEventListener
('click', getClients);


function getClients() {
    fetch('http://localhost:8080/client')
   .then(function(response) {
       return response.json();
   })
   .then(function(client) {
       let html = '';

       client.forEach((client) => {
           html += `
           <table class="table">
                <thead>
                    <tr>
                      <th>ID</th>  
                      <th>Name </th>  
                      <th>NIF </th>  
                      <th>Password </th>  
                      <th>Date Of Birth </th>  
                      <th>Phone </th>  
                      <th>Mobile </th>  
                      <th>Email </th>  
                      <th>Occupation </th>  
                    </tr>
                </thead>
                <tbody>
                    <th>${client.id}</th>
                    <th>${client.name}</th>
                    <th>${client.nif}</th>
                    <th>${client.password}</th>
                    <th>${client.dateOfBirth}</th>
                    <th>${client.phone}</th>
                    <th>${client.mobile}</th>
                    <th>${client.email}</th>
                    <th>${client.occupation}</th>
                </tbody>
           </table>
           `;
       });
       document.getElementById('result').innerHTML = html;
   })
}






