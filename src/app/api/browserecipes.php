<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));
$request = $data->request ?? null;

$sql = "SELECT * FROM recipes";
$result = $mysqli->query($sql);
/*
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
*/
  $response = array();
  while($row = mysqli_fetch_assoc($sql)){
    $response[] = $row;
  }

  echo json_encode($response);
  exit;

// Close the result set
$result->close();
?>

?>
