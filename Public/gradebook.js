function fetchGradeData() {
  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status !== 200) {
        console.error(`Could not get grades. Status: ${xhr.status}`);
      } else {
        populateGradebook(JSON.parse(xhr.responseText));
      }
    }
  }.bind(this);

  xhr.open("get", apiRoute, true);
  xhr.send();
}
function populateGradebook(data) {
  const tableElem = document.getElementById("gradebook");

  data.forEach(function(assignment) {
    let row = document.createElement("tr");

    let columns = [];

    // First column: full name
    columns.name = document.createElement("td");
    columns.name.appendChild(
      document.createTextNode(
        assignment.last_name + ", " + assignment.first_name
      )
    );

    // Second column: grade
    columns.grade = document.createElement("td");
    columns.grade.appendChild(
      document.createTextNode(assignment.total_grade)
    );

    // Add columns to row
    row.appendChild(columns.name);
    row.appendChild(columns.grade);

    // Add row to table
    tableElem.appendChild(row);
  });
}
