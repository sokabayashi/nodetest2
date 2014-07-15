/**
 * Created by saipuck on 7/15/14.
 */

// Userlist data array for filling in info box
var userListData = [];

// DOM ready
$(document).ready( function() {

  // Populate the user table on initial page load
  populateTable();

});

// Functions

// Fill table with data
function populateTable() {
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/users/userlist', function( data ) {

    // for each item in JSON, add a table row & cell to content
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '" title="Show Details">' + this.username + '</td>';
      tableContent += '<td>' + this.email + '</td>';
      tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';
    });

    // inject into existing HTML table
    $( '#userList table tbody' ).html( tableContent );
  });
};