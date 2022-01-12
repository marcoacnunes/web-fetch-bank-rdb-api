document.getElementById('getAllCards').addEventListener
('click', getCards);


function getCards() {
    fetch('http://localhost:8080/card')
   .then(function(response) {
       return response.json();
   })
   .then(function(card) {
       let html = '';

       card.forEach((card) => {
           html += `
           <table class="table">
                <thead>
                    <tr>
                      <th>ID</th>
                      <th></th>    
                      <th>Client ID </th>
                      <th></th>    
                      <th>PIN </th>
                      <th></th>    
                      <th>Account ID </th> 
                      <th></th>    
                      <th>Plafond </th>
                      <th></th>    
                      <th>Daily Withdrawals </th> 
                      <th></th>    
                      <th>Last Withdrawal </th>   
                    </tr>
                </thead>
                <tbody>
                    <th>${card.id}</th>
                    <th></th>  
                    <th>${card.client.id}</th>
                    <th></th>  
                    <th>${card.pin}</th>
                    <th></th>  
                    <th>${card.account.id}</th>
                    <th></th>  
                    <th>${card.plafond}</th>
                    <th></th>  
                    <th>${card.dailyWithdrawals}</th>
                    <th></th>  
                    <th>${card.lastWithdrawal}</th>
                </tbody>
           </table>
           `;
       });
       document.getElementById('result').innerHTML = html;
   })
}