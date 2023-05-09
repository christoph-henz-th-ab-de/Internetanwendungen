<?php

// MongoDB Verbindung herstellen
$mongo = new MongoDB\Driver\Manager("mongodb://localhost:27017");

// Anmeldung verarbeiten
if(isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Überprüfung der Anmeldeinformationen in der MongoDB
    $filter = ['email' => $email, 'password' => $password];
    $query = new MongoDB\Driver\Query($filter);
    $rows = $mongo->executeQuery('database.collection', $query);

    // Wenn Anmeldeinformationen korrekt, Einloggen des Benutzers
    if(count($rows) > 0) {
        session_start();
        $_SESSION['email'] = $email;
        header('Location: dashboard.php');
    } else {
        echo "Anmeldung fehlgeschlagen";
    }
}

// Registrierung verarbeiten
if(isset($_POST['register'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Kontoinformationen in der MongoDB speichern
    $bulk = new MongoDB\Driver\BulkWrite();
    $document = ['name' => $name, 'email' => $email, 'password' => $password];
    $bulk->insert($document);
    $mongo->executeBulkWrite('database.collection', $bulk);

    echo "Registrierung erfolgreich";
}

?>