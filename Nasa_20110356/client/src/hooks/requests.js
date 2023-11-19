const API_URL = ' http://localhost:8000'; 
async function httpGetPlanets() {
  const respone = await fetch(`${API_URL}/planets`);
  return await respone.json()
}

async function httpGetLaunches() {
 const respone = await fetch(`${API_URL}/launches`);
 const fetchedLaunches = await respone.json;
 return fetchedLaunches.sort((a, b) =>{
  return a.flightNumber  - b.flightNumber;
 });
}

async function httpSubmitLaunch(launch) {
  try {
    await fetch(`${API_URL}/launches`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(launch),
      })
    }catch(err){
      return {ok:false,}
    };
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`,{
      method: 'delete',
    })
  }catch(err){
    console.log(err);
    return{ok:false,};
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};