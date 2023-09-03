const BASE_URL = 'http://localhost:4322';

const modal_titleID = document.querySelector('.com-id');
const modal_title = document.querySelector('.com-title');
const modal_text = document.querySelector('.com-text');
const send = document.querySelector('.save');
const close = document.querySelector(".btn-close")
export function addEditEventListeners() {
  const deleteButtons = document.querySelectorAll('.edit');
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleEditButtonClick);
  });
}
send.addEventListener('click', editCom);
function handleEditButtonClick(event) {
  const button = event.target;
  const card = button.closest('.list-group-item');
  const cardId = card.dataset.id;
  const titleElId = card.querySelector('.card-title_id');
  const ID = titleElId.textContent;
  modal_titleID.textContent = ID;
  const titleEl = card.querySelector('.card-title');
  const title = titleEl.textContent;
  modal_title.value = title;
  const textEl = card.querySelector('.card-text');
  const text = textEl.textContent;
  modal_text.value = text;
}
function editCom() {
  const new_com = {
    title: modal_title.value,
    body: modal_text.value,
    id: modal_titleID.textContent,
  };

  updateComment(new_com, modal_titleID.textContent)
    .then(() => {
      const card = document.querySelector(
        `[data-id="${modal_titleID.textContent}"]`
      );
      const titleEl = card.querySelector('.card-title');
      const textEl = card.querySelector('.card-text');
      titleEl.textContent = modal_title.value;
      textEl.textContent = modal_text.value;
    close.click()
    })
    .catch(error => {
      console.error('Error updating comment:', error);
    });
}

function updateComment(comment, commentId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(comment),
  };

  return fetch(`${BASE_URL}/comments/${commentId}`, options);
}
