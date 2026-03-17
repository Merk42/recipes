<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));
$request = $data->request ?? null;

$sql = "SELECT * FROM ingredients";
$result = $mysqli->query($sql);

  $response = array();
  while($row = $result->fetch_assoc()) {
    $response[] = $row;
  }

  echo json_encode($response);
  exit;

// Close the result set
$result->close();
?>
