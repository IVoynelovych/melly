!function(){var t="http://localhost:4322";function e(){document.querySelectorAll(".delete").forEach((function(t){t.addEventListener("click",n)}))}function n(e){var c,o,a=e.target,r=a.closest(".list-group-item"),i=r.dataset.id;(c=i,o={method:"DELETE"},fetch("".concat(t,"/comments/").concat(c),o).then((function(t){return t.json()}))).then((function(){r.remove(),a.removeEventListener("click",n)})).catch((function(t){console.error("Error deleting comment:",t)}))}var c=document.querySelector(".comment"),o=document.querySelector(".title"),a=document.querySelector(".card-list");var r="http://localhost:4322",i=document.querySelector(".com-id"),l=document.querySelector(".com-title"),d=document.querySelector(".com-text"),u=document.querySelector(".save"),s=document.querySelector(".btn-close");function m(){document.querySelectorAll(".edit").forEach((function(t){t.addEventListener("click",h)}))}function h(t){var e=t.target.closest(".list-group-item"),n=(e.dataset.id,e.querySelector(".card-title_id").textContent);i.textContent=n;var c=e.querySelector(".card-title").textContent;l.value=c;var o=e.querySelector(".card-text").textContent;d.value=o}u.addEventListener("click",(function(){(t={title:l.value,body:d.value,id:i.textContent},e=i.textContent,n={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)},fetch("".concat(r,"/comments/").concat(e),n)).then((function(){var t=document.querySelector('[data-id="'.concat(i.textContent,'"]')),e=t.querySelector(".card-title"),n=t.querySelector(".card-text");e.textContent=l.value,n.textContent=d.value,s.click()})).catch((function(t){console.error("Error updating comment:",t)}));var t,e,n}));var v=document.querySelector(".card-list");fetch("".concat("http://localhost:4322","/comments")).then((function(t){return t.json()})).then((function(t){return t.forEach((function(t){var n='<li class="list-group-item card" data-id="'.concat(t.id,'">\n        <div style="width: 18rem;" >\n          <div class="card-body">\n            <h4 class="card-title_id">').concat(t.id,'</h5>\n            <h5 class="card-title">').concat(t.title,'</h5>\n            <p class="card-text">').concat(t.body,'</p>\n            <button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>\n            <button type="button" class="btn btn-danger delete">delit</button>\n          </div>\n    </li>');v.insertAdjacentHTML("beforeend",n),e(),m()}))})),e(),m(),document.querySelector(".creat").addEventListener("click",(function(){var t=c.value,n=o.value,r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({title:n,body:t})};fetch("".concat("http://localhost:4322","/comments"),r).then((function(t){return t.json()})).then((function(c){var o='<li class="list-group-item" data-id="'.concat(c.id,'">\n        <div class="card" style="width: 18rem;">\n          <div class="card-body">\n            <h4 class="card-title_id">').concat(c.id,'</h5>\n            <h5 class="card-title">').concat(n,'</h5>\n            <p class="card-text">').concat(t,'</p>\n            <button type="button" class="btn btn-warning edit">edit</button>\n            <button type="button" class="btn btn-danger delete">delit</button>\n          </div>\n    </li>');a.insertAdjacentHTML("beforeend",o),e()}))}))}();
//# sourceMappingURL=index.5226312b.js.map