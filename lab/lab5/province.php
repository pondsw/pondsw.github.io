<?php

  if($_POST["fn"]){
    $fnname = $_POST["fn"];
    $var2 = "allprovince";
    if(strcmp($fnname, $var2) === 0){
      getAllProvince();
    }else {
      $sendProvince = $_POST["provincename"];

      getMotto($sendProvince);
    }
  }

  function getAllProvince(){
    $province = file_get_contents('./77_Province/allProvince.txt', FILE_USE_INCLUDE_PATH);

    $provinces = explode(".txt", $province);
    echo json_encode($provinces);
  }

  function getMotto($name){

    $path = iconv(mb_detect_encoding($name),"tis-620//IGNORE",$name);
    // echo $path;
    $motto = file_get_contents('./77_Province/motto/'.$path.'.txt', FILE_USE_INCLUDE_PATH);
    echo $motto;

  }

?>
