window.addEventListener('load', function() {
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      const container = document.querySelector('#container');
      let astronauts = '';
      for (astronaut of json) {
        astronauts += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} </h3>
          </div>
        </div>
        `;
      }
      container.innerHTML = astronauts;
    });
  
  });