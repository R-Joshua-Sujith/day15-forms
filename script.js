var selectedRow = null;


function onFormSubmit() {
    if (validate()) {
        var formData = readData();
        if (selectedRow == null) {
            insertNewRecord(formData);
            alert("New Record Inserted Successfully");
        }
        else {
            updateRecord(formData);
            alert("Existing Record Updated Successfully")
        }
        resetForm();
    }
}

function readData() {
    var data = {};
    data["firstname"] = document.getElementById("firstname").value;
    data["lastname"] = document.getElementById("lastname").value;
    data["address"] = document.getElementById("address").value;
    data["pincode"] = document.getElementById("pincode").value;
    data["gender"] = document.getElementById("gender").value;
    data["state"] = document.getElementById("state").value;
    data["country"] = document.getElementById("country").value;
    return data;

}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.state;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.country;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick= "onEdit(this)">Edit</a>
                        <a onClick = "onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pincode").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
    document.getElementById("state").value = selectedRow.cells[5].innerHTML;
    document.getElementById("country").value = selectedRow.cells[6].innerHTML;
    scrollToTop();
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.pincode;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.state;
    selectedRow.cells[6].innerHTML = formData.country;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        alert(`User ${row.cells[0].innerHTML} record deleted Successfully`)
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("firstname").value == "" || document.getElementById("lastname").value == "" || document.getElementById("address").value == "" || document.getElementById("pincode").value == "" || document.getElementById("gender").value == "" || document.getElementById("state").value == "" || document.getElementById("country").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}