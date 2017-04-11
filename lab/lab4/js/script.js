//script.js

$(document).ready(function(){
  $.ajax({url: "77_Province/allProvince.txt", success: function(result){
      // $("#div1").html(result);

      var array = result.split(".txt");
      // alert(array);
      $.each(array, function(key, value) {
         $('#provinceSelect')
             .append($("<option></option>")
                        .attr("value",key)
                        .text(value));
      });
  }});





});
