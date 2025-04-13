//your JS code here. If required.
const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Open modal on button click
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Close modal on close button
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

   
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });