fetch('template/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
});

fetch('template/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});

fetch('../template/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header2').innerHTML = data;
});

fetch('../template/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer2').innerHTML = data;
});
