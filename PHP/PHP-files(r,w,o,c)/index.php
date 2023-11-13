<!DOCTYPE html>
<head>
    <title>Reading a file using PHP</title>
</head>
<link rel="stylesheet" href="main.css"/>
<body>
<div class="text-align-center">
<?php
$filename = "tmp.txt";
$file = file_get_contents($filename);

if( $file === false ) {
    echo ( "Error in opening file" );
    exit();
}

$file_text = htmlspecialchars($file);
//
$filesize = strlen($file);

echo ("File size: $filesize bytes");
echo ("<pre>$file_text</pre>");

?>
</div>
</body>
