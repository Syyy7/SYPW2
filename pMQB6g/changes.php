<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file=fopen("../page/default.json","w");
    fwrite($file,json_encode($_POST));
    fclose($file);
    echo "is ok";
}else{
    echo "dataType or dataName is error!!";
}

//if(isset($_POST['title'])){
//    $file=fopen("../page/default.json","w");
//    fwrite($file,json_encode($_POST));
//    fclose($file);
//    echo "is ok";
//}