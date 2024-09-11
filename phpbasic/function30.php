<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP variable via reference</title>
</head>
<body>
    <?php
        function addFive($num){
            $num += 5;
        }

        function addSix(&$num){
            $num += 6;
        }
        $orignum = 10;
        addFive($orignum);
        echo "Orignal value is $orignum";
        echo "<br>";
        addSix($orignum);
        echo "Orignal value is $orignum";
    ?>
</body>
</html>