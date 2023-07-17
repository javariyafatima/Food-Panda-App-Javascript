



//console.log(currentUser)


  
    
    let categories = [];

    // Function to add a new category
    function addCategorys() {
        let categoryInput = document.getElementById('categorys').value;
    
        // Check if the category already exists
        if (categories.includes(categoryInput)) {
            alert('Category already exists!');
        } else {
            // Add the new category to the array
            categories.push(categoryInput);
    
            // Update the table with the new category
            updateTable();
            saveCategories();
            
        
            
            
            
            
    
            // Clear the input field
            document.getElementById('categorys').value = '';
        }
    }
    
    // Function to update the table with the categories
    function updateTable() {
        let categoryTable = document.getElementById('categoryTable');
    
        // Clear the existing rows from the table
        categoryTable.innerHTML = '<tr><th>Category &nbsp;&nbsp;</th><th>Edit&nbsp;&nbsp;</th><th>Delete&nbsp;&nbsp;</th></tr>';
    
        // Loop through the categories array and add each category to the table
        categories.forEach(function(categorys, index) {
            let row = categoryTable.insertRow();
            let categoryName = row.insertCell(0);
            categoryName.innerHTML = categorys;
    
            let editButton = row.insertCell(1);
            editButton.innerHTML = '<button type="button" onclick="editCategory(' + index + ')">Edit</button>';
    
            let deleteButton = row.insertCell(2);
            deleteButton.innerHTML = '<button type="button" onclick="deleteCategory(' + index + ')">Delete</button>';
        });
        
      
      
        
    }
    
    // Function to edit a category
    function editCategory(index) {
        let newCategoryName = prompt('Enter');

        if (newCategoryName != null && newCategoryName != '') {
            // Update the category in the array
            categories[index] = newCategoryName;
        
            // Update the table with the new category name
            updateTable();
        }
    }
    updateTable();
    function addCategorys() {
        let categoryInput = document.getElementById('categorys').value;
    
        // Check if the input field is empty
        if (categoryInput == '') {
            alert('Please enter a category name!');
            return;
        }
    
        // Check if the category already exists
        if (categories.includes(categoryInput)) {
            alert('Category already exists!');
            return;
        }
    
        // Add the new category to the array
        categories.push(categoryInput);
    
        // Update the table with the new category
        updateTable();
        saveCategories();
        
        
        
    
        // Clear the input field
        document.getElementById('category').value = '';
    }
    function saveCategories() {
        localStorage.setItem('categories', JSON.stringify(categories));
    
        
    }
    
    // Function to load the categories array from local storage
    function loadCategories() {
        if (localStorage.getItem('categories')) {
            categories = JSON.parse(localStorage.getItem('categories'));
            updateTable();
        }
    }
    loadCategories();
    
    // Call the loadCategories function when the page loads
    //window.onload = loadCategories;
    
    // Call the saveCategories function after each update to the categories array
    updateTable();
    saveCategories();

    

function searchCategorys() {
	let input = document.getElementById('searchBar').value.toLowerCase();
	let filteredCategories = categories.filter(function(categorys) {
		return categorys.toLowerCase().includes(input);
	});
	displayCategories(filteredCategories);
}

function displayCategories(filteredCategories) {
	let categoryTable = document.getElementById('categoryTable');
	categoryTable.innerHTML = '<tr><th>Category </th><th>Edit</th><th>Delete</th></tr>';

	filteredCategories.forEach(function(categorys, index) {
		let row = categoryTable.insertRow();
		let categoryName = row.insertCell(0);
		categoryName.innerHTML = categorys;

		let editButton = row.insertCell(1);
		editButton.innerHTML = '<button type="button" onclick="editCategory(' + index + ')">Edit</button>';

		let deleteButton = row.insertCell(2);
		deleteButton.innerHTML = '<button type="button" onclick="deleteCategory(' + index + ')">Delete</button>';
	});
}

function deleteCategory(index) {
	let confirmation = confirm('Are you sure you want to delete this category?');
	if (confirmation == true) {
		// Remove the category from the array
		categories.splice(index, 1);

		// Update the table with the new categories
		updateTable();
        
        
	}
}



function loadCategories() {
	let storedCategories = localStorage.getItem('categories');

	if (storedCategories != null) {
		categories = JSON.parse(storedCategories);
	}
}

loadCategories();
updateTable();





