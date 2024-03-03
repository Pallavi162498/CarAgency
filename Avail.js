async function getAvailableCars() {
    const response = await fetch('get_available_cars.php');
    const availableCars = await response.json();
    const availableCarsContainer = document.getElementById('availableCars');
    availableCarsContainer.innerHTML = "";
    availableCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <h3>${car.model}</h3>
            <p>Number: ${car.number}</p>
            <p>Capacity: ${car.capacity}</p>
            <p>Rent per Day: $${car.rent_per_day}</p>
            <button onclick="openRentCarModal('${car.model}')">Rent Car</button>
        `;
        availableCarsContainer.appendChild(carCard);
    });
}
function openRentCarModal(model) {
    const modal = document.getElementById('rentCarModal');
    modal.style.display = 'block';
}
function closeRentCarModal() {
    const modal = document.getElementById('rentCarModal');
    modal.style.display = 'none';
}
function rentCar() {
    const rentDays = document.getElementById('rentDays').value;
    const startDate = document.getElementById('startDate').value;
}
document.addEventListener('DOMContentLoaded', getAvailableCars);
