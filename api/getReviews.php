<?php
    $apiKey = file_get_contents("apiKey");
    $apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJz9LRtXN3GZURuwIv1BJsJjo&key='.$apiKey;
    $json = file_get_contents($apiUrl);
    return $json;
?>