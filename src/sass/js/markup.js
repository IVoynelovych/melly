const BASE_URL = 'http://localhost:4322';
const list = document.querySelector(".card-list")

import { addEditEventListeners } from "./u-patch";
import { addDeleteEventListeners } from "./d-del.js";
export function markUp(){
    return fetch(`${BASE_URL}/comments`)
    .then(res => res.json())
    .then(res => res.forEach(coment => {
        const card =`<li class="list-group-item card" data-id="${coment.id}">
        <div style="width: 18rem;" >
          <div class="card-body">
            <h4 class="card-title_id">${coment.id}</h5>
            <h5 class="card-title">${coment.title}</h5>
            <p class="card-text">${coment.body}</p>
            <button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
            <button type="button" class="btn btn-danger delete">delit</button>
          </div>
    </li>`
        list.insertAdjacentHTML("beforeend", card)
        addDeleteEventListeners();
        addEditEventListeners()
    }))
}

