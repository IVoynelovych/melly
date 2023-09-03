const BASE_URL = 'http://localhost:4322';
export function fetchcom(){
    return fetch(`${BASE_URL}/comments`)
  .then(res => res.json())
  .then(console.log);
}
export function fetchcombyid(comentid){
    return fetch(`${BASE_URL}/comments/${comentid}`)
  .then(res => res.json())
  .then(console.log);
}

