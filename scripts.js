document.addEventListener('DOMContentLoaded', function() {
    const sheetID = '104EeAPjAnwKYIhjibg2_Z-7WkRcZ36Uchf34jRAbbm4'; // Ganti dengan ID Google Sheets Anda
    const sheetName = 'Store'; // Ganti dengan nama sheet Anda
    const apiKey = 'AIzaSyAT5TFQdhp4GIJXODWLwnw1DvDHZODLUfY'; // Ganti dengan API key Anda

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const rows = data.values.slice(1); // Skip header row
            const tableBody = document.getElementById('outlet-table-body');

            rows.forEach(row => {
                const tr = document.createElement('tr');

                row.forEach((cell, index) => {
                    const td = document.createElement('td');

                    if (index === 6) { // Kolom Directions
                        const a = document.createElement('a');
                        a.href = cell;
                        a.textContent = 'View on Maps';
                        a.target = '_blank'; // Open link in a new tab
                        a.rel = 'noopener noreferrer'; // Security measure
                        td.appendChild(a);
                    } else {
                        td.textContent = cell;
                    }

                    tr.appendChild(td);
                });

                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
