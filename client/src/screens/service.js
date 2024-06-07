document.addEventListener('DOMContentLoaded', function () {
    const servicesList = document.getElementById('services-list');

    // Dummy data (replace with actual data fetched from backend)
    const services = [
        { name: 'Oil Change', description: 'Replace engine oil and oil filter', price: 50 },
        { name: 'Brake Service', description: 'Inspect and replace brake pads and rotors', price: 100 },
        { name: 'Tire Rotation', description: 'Rotate tires to ensure even wear', price: 20 }
    ];

    // Populate services list
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: $${service.price}</p>
        `;
        servicesList.appendChild(listItem);
    });
});
