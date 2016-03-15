document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  var p = document.createElement('p');
  p.textContent = 'JS loaded';
  p.style.textAlign = 'center';
  p.style.paddingTop = '25px';
  document.body.appendChild(p);
});
