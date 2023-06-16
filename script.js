// script.js
function loadCommonElement(elementClass, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        const elements = document.getElementsByClassName(elementClass);
        for (let i = 0; i < elements.length; i++) {
          elements[i].innerHTML = data;
        }
      })
      .catch(error => {
        console.error(`Error loading ${filePath}:`, error);
      });
  }
  
  loadCommonElement('header', 'template/header.html');
  loadCommonElement('footer', 'template/footer.html');

  // script.js
function loadCommonElement(elementClass, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        const elements = document.getElementsByClassName(elementClass);
        for (let i = 0; i < elements.length; i++) {
          elements[i].innerHTML = data;
        }
      })
      .catch(error => {
        console.error(`Error loading ${filePath}:`, error);
      });
  }
  
  loadCommonElement('header2', '../template/header.html');
  loadCommonElement('footer2', '../template/footer.html');  