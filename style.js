document.getElementById('generateButton').addEventListener('click', function() {





    var container = document.getElementById('container');
    var circle = document.createElement('div');


    circle.className = 'circle';

    circle.style.backgroundColor = getRandomColor();
    circle.style.top = Math.random() * (container.offsetHeight - 50) + 'px';  //changing offset to experiment
    circle.style.left = Math.random() * (container.offsetWidth - 50) + 'px';  //I changed the offset and now it stays inside
    container.appendChild(circle);

    //its supposed to stay inside
    //offsetHeight and depends
  });



  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
//the way this color generator works.  Its going to generate random letters which should be a color
  }
  
  
  
  
  
  
  
  
  
  