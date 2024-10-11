const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "1, June, 2008",
        area: 27850,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/320%2C/0/default"
    },
    {
        templeName: "Fort Collins Colorado Temple",
        location: "Fort Collins, Colorado, USA",
        dedicated: " 16, October, 2016",
        area: 4921,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/0eaefc0418fa18839483f3c54f1d44733ee99610/full/320%2C/0/default"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "12, November, 2023",
        area: 12437,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/99f1e63f202511eeb116eeeeac1ef1e8603f51a8/full/320%2C/0/default"
    },
    
    
  ];
  
  function generateTempleCards(filteredTemples) {
    const templeCards = document.querySelector('#temple-cards');
    templeCards.innerHTML = '';
  
    filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');
  
      card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq. ft.</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
  
      templeCards.appendChild(card);
    });
  }

  generateTempleCards(temples);

  function filterTemples(category) {
    let filtered = [];
  
    switch (category) {
      case 'old':
        filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case 'new':
        filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        break;
      case 'large':
        filtered = temples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filtered = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filtered = temples;
        break;
    }
  
    generateTempleCards(filtered);
  }

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) 
    {
        hamburger.textContent = '❌'; // Change to "X" when open
    } 
    else 
    {
        hamburger.textContent = '☰'; // Change back to hamburger when closed
    }
});

