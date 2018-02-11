var jayson = require('jayson');
 
// create a client
//var client = jayson.client.http({  port: 8082 });
var client = jayson.client.http('http://localhost:8082');
 
// invoke "add" var client = jayson.client.http('http://localhost:3000');
client.request('get_payments', { "payment_id": "1234567890123456789012345678901234567890123456789012345678901234" }, function(err, response) {
  if(err) throw err;
  //console.log(response.result);
  console.log(response.result);
});