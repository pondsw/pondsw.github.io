//script.js

$(document).ready(function(){
  // $.ajax({url: "77_Province/allProvince.txt", success: function(result){
  //     // $("#div1").html(result);
  //
  //     var array = result.split(".txt");
  //     // alert(array);
  //     $.each(array, function(key, value) {
  //        $('#provinceSelect')
  //            .append($("<option></option>")
  //                       .attr("value",key)
  //                       .text(value));
  //     });
  // }});
  // $.getJSON('province.php', function(data) {
  //                      /* data will hold the php array as a javascript object */
  //   // alert(data);
  //   // var array = result.split(".txt");
  //       // alert(data);
  //       $.each(data, function(key, value) {
  //         // alert(":"+value+":");
  //          $('#provinceSelect')
  //              .append($("<option></option>")
  //                         .attr("value",key)
  //                         .text(value));
  //       });
  //
  // });
  // $.ajax({
  //        url: "province.php",
  //        type: "POST",
  //        data: {'fn':'allprovince'},
  //        success: function(data){
  //            //Do something here with the "data"
  //              alert(data);
  //            //   // var array = result.split(".txt");
  //            //       // alert(array);
  //            //       $.each(data, function(key, value) {
  //            //          $('#provinceSelect')
  //            //              .append($("<option></option>")
  //            //                         .attr("value",key)
  //            //                         .text(value));
  //            //       });
  //        }
  // });
  $.post("province.php", //Required URL of the page on server
    { // Data Sending With Request To Server
      'fn':'allprovince'
    },
    function(response,status){ // Required Callback Function

      // alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);//"response" receives - whatever written in echo of above PHP script.
      // $("#form")[0].reset();
      // alert(response);
      $.each(response, function(key, value) {
        // alert(value);
             $('#provinceSelect')
                 .append($("<option></option>")
                            .attr("value",key)
                            .text(value));
          });
    }, "json");





});
