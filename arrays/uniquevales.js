const people = [
    {
        "name": "john",
        "position": "secetary"
    },

    {
        "name": "abel",
        "position": "president"
    },

    {
        "name": "peter",
        "position": "pastor"
    },

    {
        "name": "petr",
        "position": "pastor"
    },

    {
        "name": "job",
        "position": "alien"
    },

    {
        "name": "job",
        "position": "alien"
    }
]

const positions = ['all', ...new Set(people.map((position) => position.position ))]
console.log(positions);

const result = document.querySelector('.result');
result.innerHTML = positions.map((position) => {
    return `<button onclick="filterPosition('${position}')"> ${position} </button>`
}).join(' ');

function filterPosition(position) {
    let search = position;
    if (position === 'all') {
        search = people.map((person) => person);
    } else {
        search = people.filter((person) => person.position === position);
    }
    const searchDisplay = document.querySelector('.search');
    searchDisplay.innerHTML = search.map((person) => {
        return `<h2> name: ${person.name},  position: ${person.position}</h2>`
    }).join('');
}