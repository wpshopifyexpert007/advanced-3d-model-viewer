<?php

namespace A3DMV;

use A3DMV\EnableMimeType;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class A3DMV {

    protected $loader;
    protected $plugin_name;
    protected $version;

    public function __construct() {
        $this->version = A3DMV_VERSION;
        $this->plugin_name = 'a3dmv';
        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
        $this->define_block_hooks();
        $this->define_hooks();
        $this->define_shortcodes();
    }

    private function load_dependencies() {
        $this->loader = new Loader();
    }

    private function set_locale() {
        $plugin_i18n = new I18n();
        $this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
    }

    private function define_admin_hooks() {
        $plugin_admin = new Assets($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
    }

    private function define_public_hooks() {
        $plugin_public = new Frontend($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
    }

    private function define_block_hooks() {
        $plugin_block = new Block($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('init', $plugin_block, 'register_block');
    }

    private function define_hooks(){
        $assets = new Assets($this->get_plugin_name(), $this->get_version());
        $post_type = new PostType($this->get_plugin_name(), $this->get_version());
        $mime_type = new EnableMimeType($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('init', $assets, 'enqueue_libraries');
        $this->loader->add_action('init', $post_type, 'register');
        $this->loader->add_action('init', $mime_type, 'enable');
        $this->loader->add_filter('script_loader_tag', $assets, 'script_loader_tag', 10, 3);
    }

    private function define_shortcodes(){
        $shortcode = new Shortcode($this->get_plugin_name(), $this->get_version());
        $this->loader->add_shortcode('a3dmv_model_viewer', $shortcode, 'a3dmv_model_viewer');
    }

    public function run() {
        $this->loader->run();
    }

    public function get_plugin_name() {
        return $this->plugin_name;
    }

    public function get_loader() {
        return $this->loader;
    }

    public function get_version() {
        return $this->version;
    }
}