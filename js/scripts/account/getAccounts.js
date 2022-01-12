document.getElementById('getAllAccounts').addEventListener
('click', getAccounts);


function getAccounts() {
    fetch('http://localhost:8080/account')
   .then(function(response) {
       return response.json();
   })
   .then(function(account) {
       let html = '';

       account.forEach((account) => {
           html += `
           <table class="table">
                <thead>
                    <tr>
                      <th>ID</th>
                      <th></th>  
                      <th>NIB</th> 
                      <th></th>   
                      <th>Owner ID</th>
                      <th></th>    
                      <th>Balance</th>  
                    </tr>
                </thead>
                <tbody>
                    <th>${account.id}</th>
                    <th></th>  
                    <th>${account.nib}</th>
                    <th></th>  
                    <th>${account.primaryOwner.id}</th>
                    <th></th>  
                    <th>${account.balance}</th>
                </tbody>
           </table>
           `;
       });
       document.getElementById('result').innerHTML = html;
   })
}