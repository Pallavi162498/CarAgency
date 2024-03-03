// Function to fetch and display booked cars
async function getBookedCars() {
    const response = await fetch('get_booked_cars.php');
    const bookedCars = await response.json();

    const bookedCarsContainer = document.getElementById('bookedCars');
    bookedCarsContainer.innerHTML = "";

    bookedCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <h3>${car.customerName}</h3>
            <p>Rent Days: ${car.rentDays}</p>
            <p>Start Date: ${car.startDate}</p>
        `;
        bookedCarsContainer.appendChild(carCard);
    });
}

// Fetch and display booked cars when the page loads
document.addEventListener('DOMContentLoaded', getBookedCars);
