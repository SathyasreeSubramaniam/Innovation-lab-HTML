  let employees = [];

    function addEmployee() {
      let name = document.getElementById("name").value;
      let role = document.getElementById("role").value;
      let salary = document.getElementById("salary").value;

      if (name === "" || role === "" || salary === "") {
        alert("Please fill all fields");
        return;
      }

      let employee = {
        id: Date.now(),
        name: name,
        role: role,
        salary: salary
      };

      employees.push(employee);
      displayEmployees();

      // Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("role").value = "";
      document.getElementById("salary").value = "";
    }

    function displayEmployees() {
      let tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
      tableBody.innerHTML = "";

      employees.forEach((emp) => {
        let row = `<tr>
          <td>${emp.name}</td>
          <td>${emp.role}</td>
          <td>${emp.salary}</td>
          <td><button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    }

    function deleteEmployee(id) {
      employees = employees.filter(emp => emp.id !== id);
      displayEmployees();
    }