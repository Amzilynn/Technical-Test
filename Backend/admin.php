<?php
session_start();
require_once 'config.php';

if (!isset($_SESSION['username'])) {
    header('Location: login.html');
    exit();
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['create'])) {
    $name = $_POST['name'];
    $price = $_POST['price'];

    $sql = "INSERT INTO menu_items (name, price) VALUES ('$name', '$price')";

    if ($conn->query($sql) === TRUE) {
        echo 'Item added successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . $conn->error;
    }
}

$sql = "SELECT * FROM menu_items";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<p>' . $row['name'] . ' - ' . $row['price'] . ' DT</p>';
    }
} else {
    echo 'No items found';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $id = $_POST['id'];
    $newName = $_POST['newName'];
    $newPrice = $_POST['newPrice'];

    $sql = "UPDATE menu_items SET name = '$newName', price = '$newPrice' WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo 'Item updated successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . $conn->error;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $id = $_POST['id'];

    $sql = "DELETE FROM menu_items WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo 'Item deleted successfully';
    } else {
        echo 'Error: ' . $sql . '<br>' . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>

    <form action="" method="post">
        <label for="name">Item Name:</label>
        <input type="text" name="name" required>
        <label for="price">Item Price:</label>
        <input type="number" name="price" required>
        <input type="submit" name="create" value="Add Item">
    </form>

    <h2>Menu Items</h2>
    <?php
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<p>' . $row['name'] . ' - ' . $row['price'] . ' DT</p>';
        }
    } else {
        echo 'No items found';
    }
    ?>

    <form action="" method="post">
        <label for="id">Item ID to Update:</label>
        <input type="number" name="id" required>
        <label for="newName">New Item Name:</label>
        <input type="text" name="newName" required>
        <label for="newPrice">New Item Price:</label>
        <input type="number" name="newPrice" required>
        <input type="submit" name="update" value="Update Item">
    </form>

    <form action="" method="post">
        <label for="id">Item ID to Delete:</label>
        <input type="number" name="id" required>
        <input type="submit" name="delete" value="Delete Item">
    </form>

    <form action="logout.php" method="post">
        <input type="submit" value="Logout">
    </form>
</body>
</html>
