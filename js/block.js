Primarydatabase.ref("/disabled/ipaddress").on('child_added', (snapshot) => {
    
    var html = ""
    html += "<p><b>IP Address: </b>"+snapshot.val()+"</p>";
    html += "<hr>";
    document.getElementById("block-list").innerHTML += html;
    console.log(snapshot.val());
  }, (err) => {
    alert("There was an error fetching data from the database. Please reload this site.");
  });
