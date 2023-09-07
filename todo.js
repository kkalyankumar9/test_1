const nextPersonButton = document.getElementById('next-person');
const personContainer = document.getElementById('person-container');

let currentPage = 1;
let data = [];

// Function to fetch JSON data
function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            displayPage(currentPage);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display a page of people
function displayPage(page) {
 
    personContainer.innerHTML = '';

    const itemsPerPage = 3;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);

    for (let i = startIndex; i < endIndex; i++) {
        const person = data[i];
        if (person) {
            const personDiv = document.createElement('div');
            
            personDiv.innerHTML = `
     
            <div >
                <p> ${i + 1}</p>
            </div>
            <div>
                <h3>Name: ${person.name}</h3>
                <p>Location: ${person.location}</p>
            </div>
              
            `;
            personContainer.appendChild(personDiv);
        }
    }

   
 
}

fetchData();


nextPersonButton.addEventListener('click', () => {
    const itemsPerPage = 3;
    const startIndex = currentPage * itemsPerPage;
    
    if (startIndex < data.length) {
        currentPage++;
        displayPage(currentPage);
    } else {
        alert('No more people!');
    }
});

displayPage(currentPage);
