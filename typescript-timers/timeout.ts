const heading = document.querySelector('h1');
if (heading) {
  setTimeout(() => {
    heading.textContent = 'Hello There';
  }, 2000);
  if (!heading) throw new Error('heading is not valid');
}
