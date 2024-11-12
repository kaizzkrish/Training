document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      alert('Card clicked!');
    });
  });
  
  const languageSelect = document.querySelector('.language-select');
  languageSelect.addEventListener('change', () => {
    alert(`Language changed to: ${languageSelect.value}`);
  });
  