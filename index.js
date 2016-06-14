$(function() {
    // recieves the array from json
    $.getJSON("topspots.json", function(result) {
        // create a new array
        var r = [],
            // create a string
            myRow = '';
        // fill the first line of array with headers
        r[0] = '<tr><th>Name</th><th>Description</th><th>Location</th></tr>\n';

        // loops through the json array
        for (var key = 0; key <= result.length - 1; key++) {
            // fills out a row
            myRow = '<tr><td>' + result[key].name + '</td><td class="whatever1">' + result[key].description + '</td><td class="whatever2">' + '<a href="https://www.google.com/maps?q=' + result[key].location + '"<button type="button" class="btn btn-info">Open Goole Maps</a></td></tr>';
            // pushes the row into array
            r.push(myRow);
        }
        // sends and prints it on the table
        $("#print").html(r.join(''));
    })
});
