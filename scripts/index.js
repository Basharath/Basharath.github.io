const title = document.querySelector('.title');

document.addEventListener('click', () => {
  title.style.transform = 'scale(2)';
  title.style.transition = 'transform 1s ease';
  setTimeout(() => {
    title.style.transform = 'scale(1)';
  }, 500);
});
