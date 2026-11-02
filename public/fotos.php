<?php
// Lista las fotos de una carpeta dentro de /images para que el sitio las muestre sin tocar el código.
// Uso: /fotos.php?carpeta=galeria
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache');

$base = realpath(__DIR__ . '/images');
$pedida = isset($_GET['carpeta']) ? (string) $_GET['carpeta'] : 'galeria';
$dir = ($base !== false && strpos($pedida, "\0") === false) ? realpath($base . '/' . $pedida) : false;

// Solo se puede listar dentro de /images
if ($dir === false || !is_dir($dir) || strpos($dir . DIRECTORY_SEPARATOR, $base . DIRECTORY_SEPARATOR) !== 0) {
    http_response_code(404);
    echo '[]';
    exit;
}

$fotos = [];
$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS));
foreach ($it as $archivo) {
    if (!$archivo->isFile() || !preg_match('/\.(jpe?g|png|webp)$/i', $archivo->getFilename())) {
        continue;
    }
    $fotos[] = str_replace(DIRECTORY_SEPARATOR, '/', substr($archivo->getPathname(), strlen($base) + 1));
}

// Primero las fotos sueltas, después las de cada subcarpeta, todo en orden alfabético
usort($fotos, function ($a, $b) {
    $niveles = substr_count($a, '/') - substr_count($b, '/');
    return $niveles !== 0 ? $niveles : strnatcasecmp($a, $b);
});

echo json_encode(array_map(function ($ruta) {
    return '/images/' . implode('/', array_map('rawurlencode', explode('/', $ruta)));
}, $fotos));
