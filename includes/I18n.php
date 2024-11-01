<?php

namespace A3DMV;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class I18n {

    public function load_plugin_textdomain() {
        load_plugin_textdomain(
            "advanced-3d-model-viewer",
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }
}