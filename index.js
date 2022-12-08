// Add your code here

// 3 passing tests
function submitData(){
  let dataObject= {
    name: "Steve",
    email: "steve@steve.com",
  }
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dataObject),
  }
 return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response){
    return response.json();
  })
  .then(function (dataObject){
    document.body.innerHTML = dataObject["id"];
    })
  .catch(function (error){
    document.body.innerHTML = error.message;
  })
}