<?php
/**
 * Plugin Name: Advanced 3D Model Viewer
 * Plugin URI: https://wpshopifyexpert.com/advanced-3d-model-viewer
 * Description: A powerful 3d model viewer with Gutenberg block and Elementor addon support.
 * Version: 1.0.0
 * Author: WP Shopify Expert
 * Author URI: https://wpshopifyexpert.com
 * Text Domain: advanced-3d-model-viewer
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Composer autoloader
if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

define('A3DMV_VERSION', '1.0.0');
define('A3DMV_PATH', plugin_dir_path(__FILE__));
define('A3DMV_URL', plugin_dir_url(__FILE__));

// Begins execution of the plugin
function a3dmv_run() {
    $plugin = new A3DMV\A3DMV();
    $plugin->run();
}
a3dmv_run();