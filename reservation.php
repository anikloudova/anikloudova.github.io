
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") { /*formular pro rezervaci, sbira data - POST*/
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $arrival_date = htmlspecialchars($_POST['arrival_date']);
    $departure_date = htmlspecialchars($_POST['departure_date']);
    $phone = htmlspecialchars($_POST['phone']);

    echo "<h2>Děkujeme za vaši rezervaci, $first_name!</h2>";
    echo "<p>Detaily rezervace:</p>";
    echo "<p>Jméno: $first_name $last_name</p>";
    echo "<p>Datum příjezdu: $arrival_date</p>";
    echo "<p>Datum odjezdu: $departure_date</p>";
    echo "<p>Telefon: $phone</p>";
} else {
?>

<!DOCTYPE html> 
<!--formular pro rezervaci - html struktura-->
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rezervace</title>
</head>
<body>
    <h2>Rezervace</h2>
    <form action="reservation.php" method="post">
        <label for="first_name">Jméno:</label>
        <input type="text" id="first_name" name="first_name" required><br><br>

        <label for="last_name">Příjmení:</label>
        <input type="text" id="last_name" name="last_name" required><br><br>

        <label for="arrival_date">Datum příjezdu:</label>
        <input type="date" id="arrival_date" name="arrival_date" required><br><br>

        <label for="departure_date">Datum odjezdu:</label>
        <input type="date" id="departure_date" name="departure_date" required><br><br>

        <label for="phone">Telefonní číslo:</label>
        <input type="tel" id="phone" name="phone" required><br><br>

        <input type="submit" value="Rezervovat">
    </form>
</body>
</html>

