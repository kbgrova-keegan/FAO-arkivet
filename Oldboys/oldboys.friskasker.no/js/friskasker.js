
$(document).ready(function() {

  $("#searchbutton").click(function() {
    document.location.href = '/?alttemplate=search&search=' + $("#searchtext").val();
  });

  $("#searchtext").keypress(function(e) {

    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

    if(key == 13) {
      $("#searchbutton").click();
      return false;
    }
  });

//  $.get(
//    "http://norsklandbruk/ekspertpanel.aspx?alttemplate=affiliate-experts&experts=1225,1339,1340",
//    function(data){
//    	$("#experts").html(data);
//    }
//  );


});

