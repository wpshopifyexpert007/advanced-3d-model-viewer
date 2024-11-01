<?php 
namespace A3DMV;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Shortcode{

    private $plugin_name;
    private $version;
    public function __construct($plugin_name, $version) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function a3dmv_model_viewer($atts){
        $attrs = (shortcode_atts( array(
            'id'        => null,
            "model_url"  => null,
            "poster_url"  => null,
            "alignment"  => "left",
            "align" => "left",
            "auto_rotate" => false,
            "loading" => 'eager',
            "mouse_interaction" => true,
            "bg_color" => 'transparent'
        ), $atts, 'a3dmv_model_viewer'));

        extract($attrs);

        if($id !== null){
            $id = esc_html($id);
            $post_type = get_post_type($id);

            if($post_type !== 'a3dmv-viewer'){
                return false;
            }
            $post = get_post($id);
    
            if($post){
                $blocks = parse_blocks($post->post_content);
                return render_block($blocks[0]);
            }
            return 'something went wrong!';
        }

        $block = $this->generate_advanced_model_viewer_to_block($attrs);

        return render_block($block);

    }


    public function generate_advanced_model_viewer_to_block($attrs){
        extract($attrs);
        
        return [
            'blockName' => 'a3dmv/model-viewer',
            'attrs' => [
                'clientId' => wp_unique_id('a3dmv'),
                'align' => esc_attr($align),
                'alignment' => esc_attr($alignment),
                'model' => [
                    'model_url' => $model_url,
                    'poster_url' => $poster_url,
                ],
                'attrs' => [
                    'auto-rotate' => $auto_rotate === 'true',
                    'camera-controls' => $mouse_interaction === 'true',
                    'loading' => $loading
                ],
                'style' => [
                    'height' => esc_html($height),
                    'width' => esc_html($width),
                    'bgColor' => esc_attr($bg_color),
                ],
                'className' => esc_attr($class_name)
            ],
            'innerBlocks' => [],
            'innerHTML' => '',
            'innerContent' => []
        ];
    }

}