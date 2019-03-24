// from data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
//tbody.setAttribute("id", "null_tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

function appendData(inData){
    // // Step 1: Loop Through `data` and console.log each UFO object
    inData.forEach(function(ufo_data_line) {
        console.log(ufo_data_line);
    
    // // Step 2:  Use d3 to append one table row `tr` for each weather report object
        var row = tbody.append("tr");
    
    // // Step 3:  Use `Object.entries` to console.log each UFO report value
        Object.entries(ufo_data_line).forEach(function([key, value]) {
            console.log(key, value);

    // // Step 4: Use d3 to append 1 cell per UFO report value (date/time, city, state, country, shape, and comment)
    //     // Append a cell to the row for each value
    //     // in the weather report object
        var cell = tbody.append("td");

    // // Step 5: Use d3 to update each cell's text with
    // // UFO report values (date/time, city, state, country, shape, and comment)
        cell.text(value);
        });
    });
}

appendData(tableData);

button.on("click", function(date_input){
    d3.event.preventDefault();

    document.getElementById('null_tbody').innerHTML = "";

    var inputField = d3.select("#datetime");
    var datetimeVal = inputField.property("value");

    console.log(datetimeVal);

    if (datetimeVal.length != 0){
        var tableData = data.filter(function(ufo_event) {
            return ufo_event.datetime == datetimeVal;
        
        })
    }
    if (datetimeVal.length == 0) {tableData = data;}

    appendData(tableData);
});
