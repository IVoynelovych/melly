const BASE_URL = 'http://localhost:4322';
export function addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
      button.addEventListener('click', handleDeleteButtonClick);
    });
  }
  
  function handleDeleteButtonClick(event) {
    const button = event.target;
    const card = button.closest('.list-group-item');
    const cardId = card.dataset.id;
    deleteComment(cardId)
      .then(() => {
        card.remove();
        button.removeEventListener('click', handleDeleteButtonClick);
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  }
  
export function deleteComment(commentId) {
  const option = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/comments/${commentId}`, option).then(res =>
    res.json()
  );
}
