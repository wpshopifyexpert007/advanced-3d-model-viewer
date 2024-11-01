<?php
namespace A3DMV;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class PostType{
    private $plugin_name;
    private $version;
    public function __construct($plugin_name, $version){
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        
    }

    public function register(){
        $this->register_advanced_3d_model_viewer_post_type();
    }

    function register_advanced_3d_model_viewer_post_type() {
        
        $labels = array(
            'name'                  => _x( 'Advanced 3D Model Viewers', 'Post type general name', 'advanced-3d-model-viewer' ),
            'singular_name'         => _x( 'Advanced 3D Model Viewer', 'Post type singular name', 'advanced-3d-model-viewer' ),
            'menu_name'             => _x( '3D Model Viewers', 'Admin Menu text', 'advanced-3d-model-viewer' ),
            'name_admin_bar'        => _x( 'Advanced 3D Model Viewer', 'Add New on Toolbar', 'advanced-3d-model-viewer' ),
            'add_new'               => __( 'Add New', 'advanced-3d-model-viewer' ),
            'add_new_item'          => __( 'Add New Advanced 3D Model Viewer', 'advanced-3d-model-viewer' ),
            'new_item'              => __( 'New Advanced 3D Model Viewer', 'advanced-3d-model-viewer' ),
            'edit_item'             => __( 'Edit Advanced 3D Model Viewer', 'advanced-3d-model-viewer' ),
            'view_item'             => __( 'View Advanced 3D Model Viewer', 'advanced-3d-model-viewer' ),
            'all_items'             => __( 'All', 'advanced-3d-model-viewer' ),
            'search_items'          => __( 'Search Advanced 3D Model Viewers', 'advanced-3d-model-viewer' ),
            'parent_item_colon'     => __( 'Parent Advanced 3D Model Viewers:', 'advanced-3d-model-viewer' ),
            'not_found'             => __( 'No Advanced 3D Model Viewers found.', 'advanced-3d-model-viewer' ),
            'not_found_in_trash'    => __( 'No Advanced 3D Model Viewers found in Trash.', 'advanced-3d-model-viewer' )
        );

        $args = array(
            'labels'                => $labels,
            'public'                => false,
            'show_ui'               => true, 		
            'show_in_rest'          => true,							
            'publicly_queryable'    => false,
            'exclude_from_search'   => true,
            'menu_position'         => 18,
            'menu_icon'             => 'dashicons-visibility',		
            'has_archive'           => false,
            'hierarchical'          => false,
            'capability_type'       => 'page',
            'rewrite'               => array( 'slug' => "advanced-3d-model-viewer" ),
            'supports'              => array( 'title', 'editor' ),
            'template'              => [
                ['a3dmv/model-viewer']
            ],
            'template_lock'         => 'all'
        );

        register_post_type( 'a3dmv-viewer', $args );
    }
}