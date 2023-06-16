// script.js
fetch('test.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('test').innerHTML = data;
  });
