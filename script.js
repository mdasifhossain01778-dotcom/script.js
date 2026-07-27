<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bengali Text Display</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f4f4f9;
        }
        .message-card {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
        }
        .bengali-text {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<div class="message-card">
    <!-- The UTF-8 charset ensures the Bengali characters render correctly -->
    <p class="bengali-text">তুমি অনেক ভালো মানুষ</p>
</div>

</body>
</html>
