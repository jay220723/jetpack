<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0d8bf79ba409cd60a0425462f54b7398
{
    public static $prefixLengthsPsr4 = array (
        'V' => 
        array (
            'VariableAnalysis\\' => 17,
        ),
        'J' => 
        array (
            'Jetpack\\Assets\\' => 15,
        ),
        'D' => 
        array (
            'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 55,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'VariableAnalysis\\' => 
        array (
            0 => __DIR__ . '/..' . '/sirbrillig/phpcs-variable-analysis/VariableAnalysis',
        ),
        'Jetpack\\Assets\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-logo/src',
        ),
        'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dealerdirect/phpcodesniffer-composer-installer/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0d8bf79ba409cd60a0425462f54b7398::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0d8bf79ba409cd60a0425462f54b7398::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}