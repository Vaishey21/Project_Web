document.getElementById('view-bookings-btn').addEventListener('click', function() {
    const adminContent = document.getElementById('admin-content');
    adminContent.innerHTML = `
        <h2>Bookings</h2>
        <table>
            <tr>
                <th>Booking ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Service</th>
            </tr>
            <tr>
                <td>001</td>
                <td>John Doe</td>
                <td>2024-06-01</td>
                <td>Oil Change</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Jane Smith</td>
                <td>2024-06-03</td>
                <td>Brake Inspection</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Mike Johnson</td>
                <td>2024-06-05</td>
                <td>Full Service</td>
            </tr>
        </table>
    `;
    adminContent.classList.add('admin-content-visible');
});
