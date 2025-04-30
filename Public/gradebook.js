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
