<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));
$request = $data->request ?? null;
$ingredient_id = isset($_GET['ingredient_id']) ? intval($_GET['ingredient_id']) : null;

if (!$ingredient_id) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing ingredient_id']);
    exit;
}

if (!$mysqli || $mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'DB connection failed']);
    exit;
}

$sql = "SELECT recipe_id FROM recipe_ingredients WHERE ingredient_id IN (".$ingredient_id.")";
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
