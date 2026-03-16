<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));
$request = $data->request ?? null;
$recipe_id = isset($_GET['recipe_id']) ? intval($_GET['recipe_id']) : null;

if (!$recipe_id) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing recipe_id']);
    exit;
}

if (!$mysqli || $mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'DB connection failed']);
    exit;
}

$allResults = [];

$query  = "SELECT * FROM recipes WHERE id=" . $recipe_id . ";";
$query .= "SELECT step_number, instruction, timer_seconds FROM steps WHERE recipe_id=" . $recipe_id . " ORDER BY step_number;";

if ($mysqli->multi_query($query)) {
    do {
        if ($result = $mysqli->store_result()) {
            $rows = [];
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
            $allResults[] = $rows;
            $result->free();
        }

        if ($mysqli->errno) {
            http_response_code(500);
            echo json_encode(['error' => $mysqli->error]);
            exit;
        }

    } while ($mysqli->next_result());
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Query failed: ' . $mysqli->error]);
    exit;
}

header('Content-Type: application/json');
echo json_encode([
    'recipe' => $allResults[0][0] ?? null,
    'steps'  => $allResults[1] ?? []
]);
?>
