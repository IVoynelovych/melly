const BASE_URL = 'http://localhost:4322';
import { addDeleteEventListeners } from "./d-del";
const com_text = document.querySelector('.comment');
const com_title = document.querySelector('.title');
const list = document.querySelector(".card-list")
export function addCom() {
  const com_text_value = com_text.value;
  const com_title_value = com_title.value;
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ title: com_title_value, body: com_text_value }),
  };
  fetch(`${BASE_URL}/comments`, option)
    .then(res => res.json())
    .then(res => {
    const card =`<li class="list-group-item" data-id="${res.id}">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title_id">${res.id}</h5>
            <h5 class="card-title">${com_title_value}</h5>
            <p class="card-text">${com_text_value}</p>
            <button type="button" class="btn btn-warning edit">edit</button>
            <button type="button" class="btn btn-danger delete">delit</button>
          </div>
    </li>`
        list.insertAdjacentHTML("beforeend", card)
        addDeleteEventListeners();
    });
}
