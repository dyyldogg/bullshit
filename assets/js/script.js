// Sample data for colleges (replace with your actual data)
var colleges = [
    { name: "ABC University", major: "engineering" },
    { name: "XYZ College", major: "business" },
    { name: "PQR Institute", major: "arts" },
    // Add more college objects with name and major properties
  ];
  
  // Function to perform search and filtering
  function searchAndFilter() {
    var searchInput = document.getElementById("search-input").value.toLowerCase();
    var filterSelect = document.getElementById("filter-select").value.toLowerCase();
  
    var filteredColleges = colleges.filter(function(college) {
      var nameMatch = college.name.toLowerCase().includes(searchInput);
      var majorMatch = filterSelect === "" || college.major.toLowerCase() === filterSelect;
  
      return nameMatch && majorMatch;
    });
  
    displaySearchResults(filteredColleges);
  }
  
  // Function to display search results
  function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = "";
  
    if (results.length === 0) {
      searchResultsDiv.innerHTML = "<p>No results found.</p>";
    } else {
      results.forEach(function(college) {
        var collegeDiv = document.createElement("div");
        collegeDiv.innerHTML = "<h3>" + college.name + "</h3><p>Major: " + college.major + "</p>";
  
        searchResultsDiv.appendChild(collegeDiv);
      });
    }
  }
  