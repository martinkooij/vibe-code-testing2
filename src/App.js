import React from 'react';
import './App.css';
import {AdministrationServiceClient} from './proto/proto/local_grpc_web_pb.js'
import {GetTokenRequest,GetTokenResponse} from './proto/proto/local_pb.js';


const showToken = async() => {  
    const EnvoyURL = "http://localhost:8090";
    var request = new GetTokenRequest();
    const client = new AdministrationServiceClient(EnvoyURL, null, null);
    const response = await client.getToken(request);
    console.log("Response from server:");
    console.log("response:", response.);

    return response.getResponse();
}
const onClickShow = async () => {
    const response = await showToken();
    document.getElementById("response").innerText = JSON.stringify(response);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
         Press Button
      <button onClick={onClickShow}>Show Token</button>
      <div id="response"></div>

    </div>
  );
}



export default App;

//         Press Button
//      <button onClick={onClickShow}>Show Token</button>
 //     <div id="response"></div>