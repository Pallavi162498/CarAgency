<?php
$dsn = 'mysql:host=localhost;dbname=your_database';
$username = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    die();
}

$type = $_GET['type'];

if ($type == 'customer' || $type == 'agency') {
    // Registration Logic
    if (isset($_POST[$type . 'Name'], $_POST[$type . 'Email'], $_POST[$type . 'Password'])) {
        // Validate and sanitize form data
        $name = htmlspecialchars($_POST[$type . 'Name']);
        $email = filter_var($_POST[$type . 'Email'], FILTER_SANITIZE_EMAIL);
        $password = password_hash($_POST[$type . 'Password'], PASSWORD_DEFAULT);

        try {
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
            $stmt->execute([$name, $email, $password]);
            echo "Registration successful for $type";
        } catch (PDOException $e) {
            echo "Registration failed: " . $e->getMessage();
        }
    } else {
        echo "Please fill in all registration fields";
    }

    // Login Logic
    if (isset($_POST[$type . 'LoginEmail'], $_POST[$type . 'LoginPassword'])) {
        // Validate and sanitize form data
        $email = filter_var($_POST[$type . 'LoginEmail'], FILTER_SANITIZE_EMAIL);
        $password = $_POST[$type . 'LoginPassword'];

        try {
            $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                // Login successful
                echo "Login successful for $type";
                header("Location: AvailCar.html");
                exit();
            } else {
                echo "Invalid email or password";
            }
        } catch (PDOException $e) {
            echo "Login failed: " . $e->getMessage();
        }
    } else {
        echo "Please fill in all login fields";
    }
} else {
    echo "Invalid user type";
}
?>