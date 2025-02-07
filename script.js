// Sample user data
const users = [
    { name: "Mike Bharat", email: "mikeb@gmail.com", type: "Admin", joined: "25 Apr, 2018", status: "PENDING" },
    { name: "Andrew Strauss", email: "info@gmail.com", type: "Editor", joined: "25 Apr, 2018", status: "APPROVED" },
    { name: "Ross Koopman", email: "rossk@gmail.com", type: "Subscriber", joined: "25 Apr, 2018", status: "APPROVED" },
    { name: "Mike Hury", email: "mikehury@gmail.com", type: "Admin", joined: "25 Apr, 2018", status: "DENIED" },
    { name: "Kevin Petersen", email: "kpetersen@gmail.com", type: "Admin", joined: "25 Apr, 2018", status: "PENDING" },
];

// Populate the table dynamically
const tableBody = document.getElementById("userTable");

users.forEach(user => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.type}</td>
        <td>${user.joined}</td>
        <td><span class="status ${user.status.toLowerCase()}">${user.status}</span></td>
    `;

    tableBody.appendChild(row);
});

// Search functionality
document.querySelector(".search-box").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#userTable tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
});
});