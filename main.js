(function() {
  
  'use strict';
    
  // find the desired selectors
  var btn = document.getElementById('request');
  var convert = document.getElementById('convert');
  
  var request = new XMLHttpRequest();
  
  // keep track of the request
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      convert.style.border = '1px solid #e8e8e8';
      // uncomment the line below to see the request
      console.log(request);
      if(request.status === 200) {
        // update the HTML of the element
        convert.innerHTML = request.responseText;        
      } else {
        convert.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }

  // specify the type of request
  request.open('Get', 'http://api.fixer.io/latest');

  btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
    request.send();
  });
  
})();