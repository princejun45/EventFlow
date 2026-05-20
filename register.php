<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost";
$user = "root";
$password = "";
$database = "eventflow";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully <br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo "Form submitted <br>";

    $fullname = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $ticket = $_POST['ticket'];
    $quantity = $_POST['quantity'];
    $session = $_POST['session'];

    $sql = "INSERT INTO registrations 
    (fullname, email, phone, company, ticket_type, quantity, session_choice)

    VALUES

    ('$fullname', '$email', '$phone', '$company', '$ticket', '$quantity', '$session')";

    if ($conn->query($sql) === TRUE) {

       echo "<script>
        document.getElementById('form-message').textContent = 'Registration successful!';
        document.getElementById('form-message').style.color = 'green';
      </script>";

    } else {

        echo "SQL Error: " . $conn->error;

    }

} else {

    echo "Form NOT submitted";

}

$conn->close();

?>