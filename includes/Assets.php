<?php

namespace A3DMV;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Assets {

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function enqueue_styles() {
        
    }

    public function enqueue_scripts() {
        
    }

    public function enqueue_admin_assets() {
        
    }

    public function enqueue_block_editor_assets() {
        
    }

    public function enqueue_libraries(){
        wp_register_script(
            'model-viewer-4.0.0',
            A3DMV_URL . 'lib/model-viewer/model-viewer.min.js',
            array(),
            '4.0.0',
            false
        );
      
    }

    public  function script_loader_tag($tag, $handle, $src) {

        if ('model-viewer-4.0.0' === $handle) {
            $tag = '<script id="model-viewer-4.0.0-js" type="module" src="' . esc_url($src) . '"></script>';
        }
        return $tag;
    }
}