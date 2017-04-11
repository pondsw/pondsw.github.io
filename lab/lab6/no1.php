<html>
<body>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webtech";
$cusid = $_GET["cusid"];
$cityid = $_GET["citiid"];
$fname = $_GET["fname"];
$lname = $_GET["lname"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // $conn->beginTransaction();
    $sql = "INSERT INTO customer (CustomerID, CitizenID, FirstName, Lastname)
    VALUES ($cusid, $cityid, '$fname','$lname')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>

</body>
</html>
