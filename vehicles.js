const vehicles = [
  {
    title: "Toyota Corolla",
    details: "2019 | Automatic | Petrol | R85,000",
    img: "images/vehicles/corolla.jpg.jpg"
  },
  {
    title: "Honda CR-V",
    details: "2020 | Automatic | Diesel | R95,000",
    img: "images/vehicles/honda-crv.jpg"
  },
  {
    title: "Mercedes-Benz C-Class",
    details: "2018 | Automatic | Petrol | R105,000",
    img: "images/vehicles/mercedes-c.jpg"
  },
  {
    title: "Nissan Navara",
    details: "2021 | Manual | Diesel | R65,000",
    img: "images/vehicles/navara.jpg"
  },
  {
    title: "Mazda CX-5",
    details: "2019 | Automatic | Petrol | R100,000",
    img: "images/vehicles/cx5.jpg"
  },
  {
    title: "Toyota Hilux",
    details: "2022 | Automatic | Diesel | R55,000",
    img: "images/vehicles/hilux.jpg.jpg"
  }
  // Add more vehicles as needed
];

// Dynamically render vehicle cards
function renderVehicles() {
  const gallery = document.getElementById('vehicleGallery');
  gallery.innerHTML = vehicles.map(vehicle => `
    <div class="vehicle-card">
      <img src="${vehicle.img}" alt="${vehicle.title}">
      <div class="vehicle-title">${vehicle.title}</div>
      <div class="vehicle-details">${vehicle.details}</div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderVehicles);