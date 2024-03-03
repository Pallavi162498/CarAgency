// Function to validate the "Add New Car" form
function validateAddCarForm() {
    var vehicleModel = document.getElementById('vehicleModel').value.trim();
    var vehicleNumber = document.getElementById('vehicleNumber').value.trim();
    var seatingCapacity = document.getElementById('seatingCapacity').value.trim();
    var rentPerDay = document.getElementById('rentPerDay').value.trim();

    if (vehicleModel === "" || vehicleNumber === "" || seatingCapacity === "" || rentPerDay === "") {
        alert("Please fill in all fields");
        return false;
    }

    if (isNaN(seatingCapacity) || isNaN(rentPerDay)) {
        alert("Seating capacity and rent per day must be numeric values");
        return false;
    }

    return true;
}

// Event listener for form submission
document.getElementById('addCarForm').addEventListener('submit', function (event) {
    if (!validateAddCarForm()) {
        event.preventDefault();
    }
});
