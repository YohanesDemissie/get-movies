var app = document.getElementById('root');
// recreate react.js like simulator

const container = document.createElement('div');
//create container for content to render within

app.appendChild(container);
container.setAttribute('class', 'container')

var request = new XMLHttpRequest();
// Step 1: Initialize API call with new request

request.open('GET', 'https://ghibliapi.vercel.app/films', true);
//Step 2: initilialize crud route (get in this example)

request.onload = function() {
  var data = JSON.parse(this.response); //Step 3: begin parsing through data and apply logic
  if (request.status >= 200 && request.status < 400 ) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      let image = document.createElement('img');
      image.src = `${movie.image}`;
      console.log(movie.image, 'API')
      console.log('HELLO')

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(image);
      card.appendChild(p);
    })
  } else {
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = 'YOU DUN MESSED UP FAM';
    app.appendChild(errorMessage);
  }
}

request.send();
//Step 4: Finalize api call

