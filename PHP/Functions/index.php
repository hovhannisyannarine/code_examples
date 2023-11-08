<?php
//1
function prime_Number($number) {
    if ($number <= 1) {
        return 'This is not a prime number';
    }
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) {
            return $number . ' is not a prime number';
        }
    }
    return $number . ' is a prime number';
}
echo prime_Number(3);
echo '<br>';

//2
function sortArray($array, $order) {
    if ($order == 'asc') {
        sort($array);
    } else if ($order == 'desc') {
        rsort($array);
    }
    return $array;
}
var_dump(sortArray([1, 8, 3, 4, 7, 6, 5, 3, 9], 'asc'));
echo '<br>';
var_dump(sortArray([10, 2, 3, 44, 5, 6, 7, 12], 'desc'));
//3
function countStringsCharacters($string) {
    return str_word_count($string);
}
echo countStringsCharacters('This test is a string');
//4
function randomPasswordGenerate($length = 8) {
    $generatePassword = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?';
    $getPassword = strlen($generatePassword);
    $password = '';

    for ($i = 0; $i < $length; $i+=1) {
        $password .= $generatePassword[rand(0, $getPassword - 8)];
    }

    if (!preg_match('/\d/', $password)) {
        return randomPasswordGenerate($length);
    }
    return $password;
}

echo '<br>';
echo randomPasswordGenerate();
//5
function splitArray($array, $chunkSize) {
    return array_chunk($array, $chunkSize);
}
echo '<br>';
var_dump(splitArray([1, 2, 3, 4, 5, 6, 7, 8], 4));


