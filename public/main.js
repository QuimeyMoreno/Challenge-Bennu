/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  const nameElement = document.getElementById("my-name");
  nameElement.textContent = "Quimey Moreno";
}

/********************************
 * QUESTION 2.
 *******************************/
var listItems = [
  "Settings",
  "Customer Support",
  "On Demand",
  "Search",
  "Widgets",
];

function executeQ2() {
    
  const listElement = document.getElementById("q2-list");
  listItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
}

/********************************
 * QUESTION 3.
 *******************************/
function Person() {
  var name = "";

  this.setName = function (n) {
    name = n;
  };

  this.getName = function () {
    return name;
  };
}

function executeQ3() {
  const person1 = new Person();
  person1.setName("Scott");

  const person2 = new Person();
  person2.setName("Matt");
  
  const listElement = document.getElementById("q3-list");

  const names = [person1.getName(), person2.getName()];
  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    listElement.appendChild(listItem);
  });
}

/********************************
 * QUESTION 4.
 *******************************/
function executeQ4() {
    const form = document.getElementById('user-form');
    const usersCount = document.getElementById('users-count');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = {
            name: formData.get('name'),
            username: formData.get('username'),
            email: formData.get('email'),
            address: {
                street: formData.get('street'),
                suite: formData.get('suite'),
                city: formData.get('city'),
                zipcode: formData.get('zipcode'),
                geo: {
                    lat: formData.get('lat'),
                    lng: formData.get('lng')
                }
            },
            phone: formData.get('phone'),
            website: formData.get('website'),
            company: {
                name: formData.get('companyName'),
                catchPhrase: formData.get('catchPhrase'),
                bs: formData.get('bs')
            }
        };

        try {
            await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const response = await fetch('http://localhost:8080/api/users/count');
            const data = await response.json();
            usersCount.textContent = data.count;
        } catch (error) {
            console.error('Error:', error);
        }

        form.reset();
    });
}


/********************************
 * QUESTION 5.
 *******************************/
    function executeQ5() {
        const listElement = document.getElementById('q5-answer');

        fetch('http://localhost:8080/api/users') 
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name; 
                    listElement.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error en el fetch', error);
            });
    }
