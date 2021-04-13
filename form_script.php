

    
<?php

$email=$_POST['email'];
$name=$_POST['name'];
$data=$name.",".$email;


$file="file.csv";


file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
header("Location: first-game.html");
exit();


?>
<html>
<head>
   
</head>
<body>

 <!--  <input type="submit" onClick="myFunction()"/>
     <script>
       function myFunction() {
         window.location.href="index.html";
       }
     </script> --> 
    
</body>




</html>
