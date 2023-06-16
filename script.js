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
  
  loadCommonElement('header', 'header.html');
  loadCommonElement('footer', 'footer.html');  