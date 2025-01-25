// Function to fetch data based on search query
async function searchData() {
    const query = document.getElementById('searchBar').value;
    const apiUrl = `http://localhost:5000/livros/${query}`;

    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();

        // Clear previous table data
        const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';

        // Insert new data into the table
        data.forEach(item => {
            const row = tableBody.insertRow();

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4); // For the action buttons

            cell1.textContent = item.isbn;
            cell2.textContent = item.nome;
            cell3.textContent = item.autor;
            cell4.textContent = item.genero;

            // Action buttons (Edit, Delete)
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => startEditing(item);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => deleteData(item.isbn);

            cell5.appendChild(editButton);
            cell5.appendChild(deleteButton);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to start editing the selected data entry
function startEditing(item) {
    document.getElementById('newIsbn').value = item.isbn;
    document.getElementById('newNome').value = item.nome;
    document.getElementById('newAutor').value = item.autor;
    document.getElementById('newGenero').value = item.genero;

    document.getElementById('newIsbn').readOnly = true;

    // Change the "Add" button to "Update"
    const addButton = document.getElementById('addButton');
    addButton.textContent = 'Atualizar';
    addButton.setAttribute('onclick', `updateData('${item.isbn}')`);
    if (!document.getElementById('cancelButton')) {
        // Create Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancelar';
        cancelButton.setAttribute('onclick', 'cancelEdit()');
        cancelButton.setAttribute('id', 'cancelButton')
        cancelButton.style.backgroundColor = '#d9534f'; // Red color for cancel
        cancelButton.style.marginLeft = '10px'; // Space between buttons

        // Add the Cancel button to the action cell (next to the Update button)
        const actionCell = document.getElementById('newEntryForm');
        actionCell.appendChild(cancelButton);
    }
}

// Function to cancel editing and reset the form
function cancelEdit() {
    // Clear the form
    clearForm();

    // Remove the Cancel button from the table
    const cancelButton = document.getElementById('cancelButton');
    if (cancelButton) {
        cancelButton.remove();
    }

    // Reset the "Add" button back to its original state
    const addButton = document.getElementById('addButton');
    addButton.textContent = 'Adicionar';
    addButton.setAttribute('onclick', 'addData()');
}

// Function to add new data to the table and database
async function addData() {
    const isbn = document.getElementById('newIsbn').value;
    const nome = document.getElementById('newNome').value;
    const autor = document.getElementById('newAutor').value;
    const genero = document.getElementById('newGenero').value;

    if (!checkISBN(isbn)) {
        alert("Insira um ISBN válido de 13 dígitos!");
        return;
    }

    const apiUrl = 'http://localhost:5000/livros';

    const newBook = {
        isbn,
        nome,
        autor,
        genero
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        });

        if (response.ok) {
            searchData(); // Refresh the data after adding
            clearForm(); // Clear form after adding
        }
    } catch (error) {
        console.error('Error adding data:', error);
    }
}

// Function to update existing data
async function updateData(isbn) {
    const nome = document.getElementById('newNome').value;
    const autor = document.getElementById('newAutor').value;
    const genero = document.getElementById('newGenero').value;

    const apiUrl = `http://localhost:5000/livros/${isbn}`;

    const updatedData = {
        isbn,
        nome,
        autor,
        genero
    };

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        if (response.ok) {
            searchData(); // Refresh the data after updating
            clearForm(); // Clear form after updating
        }
    } catch (error) {
        console.error('Error updating data:', error);
    }

    const cancelButton = document.getElementById('cancelButton');
    if (cancelButton) {
        cancelButton.remove();
    }
}

// Function to delete data
async function deleteData(isbn) {
    const apiUrl = `http://localhost:5000/livros/${isbn}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
        });

        if (response.ok) {
            searchData(); // Refresh the data after deletion
        }
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

// Function to clear the form after adding/updating
function clearForm() {
    document.getElementById('newIsbn').value = '';
    document.getElementById('newNome').value = '';
    document.getElementById('newAutor').value = '';
    document.getElementById('newGenero').value = '';

    // Reset the "Add" button back
    const addButton = document.getElementById('addButton');
    addButton.textContent = 'Adicionar';
    addButton.setAttribute('onclick', 'addData()');

    document.getElementById('newIsbn').readOnly = false;
}

function checkISBN(isbn) {
    return /^\d{13}$/.test(isbn)
}