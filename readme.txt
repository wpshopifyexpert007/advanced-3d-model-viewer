=== Advanced 3D Model Viewer ===
Contributors: wpshopifyexpert
Tags: 3D Viewer, 3D Model Display, Interactive Models, WooCommerce 3D, GLTF Viewer
Donate Link: https://buymeacoffee.com/shehabulislam
Requires at least: 5.8
Tested up to: 6.6.2
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Embed and interact with 3D models in your WordPress content using a block, shortcode, or custom post type.

== Description ==

Advanced 3D Model Viewer allowing you to easily embed and interact with 3D models in your posts, pages, and custom content. Whether you're an architect showcasing building designs, a product designer displaying prototypes, an educator creating interactive learning materials, or a 3D artist sharing your work, this plugin provides a seamless way to bring your 3D content to life on the web.

Features:

* Gutenberg block for easy embedding of 3D models
* Shortcode support for use in classic editor or text widgets
* Custom post type for managing 3D model viewers
* Support for multiple 3D file formats including glTF, glb
* Customizable viewer size, background color, and alignment
* Optional auto-rotation and camera controls
* Poster image support for faster loading
* Responsive design for optimal viewing on all devices
* Built with modern web technologies for fast and smooth performance

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/advanced-3d-model-viewer` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Use the Advanced 3D Model Viewer block in the block editor, or use the shortcode [a3dmv_model_viewer] in your posts and pages.

== Frequently Asked Questions ==

= What 3D file formats are supported? =

The plugin supports various 3D file formats including glTF, glb

= Can I customize the appearance of the 3D viewer? =

Yes, you can customize the width, height, background color, alignment, and more using the block settings or shortcode attributes.

= How can I use the shortcode? =

You can use the shortcode [a3dmv_model_viewer] with various attributes to customize the 3D model viewer. Here's a detailed explanation of all available attributes:

[a3dmv_model_viewer id="123" model_url="https://example.com/model.gltf" poster_url="https://example.com/poster.jpg" alignment="center" auto_rotate="true" loading="lazy" mouse_interaction="true" bg_color="#ffffff" width="800" height="600"]

Shortcode Attributes:

* id: (optional) The ID of a previously created 3D Model Viewer post. If provided, it will use the settings from that post.
* model_url: (required if id is not provided) The URL of your 3D model file.
* poster_url: (optional) The URL of an image to display while the 3D model is loading.
* alignment: (optional) Set the alignment of the viewer. Options: 'left', 'center', 'right'. Default: 'left'.
* align: (optional) Alternative attribute for alignment. Uses the same options as 'alignment'.
* auto_rotate: (optional) Enable or disable auto-rotation of the model. Options: 'true', 'false'. Default: 'false'.
* loading: (optional) Set the loading behavior. Options: 'auto', 'lazy', 'eager'. Default: 'eager'.
* mouse_interaction: (optional) Enable or disable mouse interaction (camera controls). Options: 'true', 'false'. Default: 'true'.
* bg_color: (optional) Set the background color of the viewer. Use color hex codes or color names. Default: 'transparent'.
* width: (optional) Set the width of the viewer in pixels. Default: 600.
* height: (optional) Set the height of the viewer in pixels. Default: 400.

Example with minimal attributes:
[a3dmv_model_viewer model_url="https://example.com/model.gltf"]

Example with all attributes:
[a3dmv_model_viewer model_url="https://example.com/model.gltf" poster_url="https://example.com/poster.jpg" alignment="center" auto_rotate="true" loading="lazy" mouse_interaction="true" bg_color="#f0f0f0" width="1000" height="800"]


== Screenshots ==

1. model viewer
2. Gutenberg block settings

== Changelog ==

= 1.0.0 =
* Initial release
* Added support for auto-rotation, camera controls, and poster images
* Implemented customizable loading behavior and mouse interaction

== Upgrade Notice ==

= 1.0.0 =
Initial release of the Advanced 3D Model Viewer plugin with enhanced features and customization options.


= Credits =

This plugin uses the following open-source libraries:
* [<model-viewer>](https://github.com/google/model-viewer) - For model viewing functionality

= Privacy Policy =

Advanced 3D model Viewer does not collect or store any personal data. It functions solely to display 3d content on your WordPress site.

## Source Code Availability

To comply with WordPress.org guidelines and ensure transparency, we provide access to the uncompressed source code of our JavaScript files. This is important for the review process and for users who wish to examine or modify the code.

### Accessing the Source Code

The uncompressed JavaScript source files are available in the `src` folder of our plugin repository. You can find these files at:

[https://github.com/shehabulislam/advanced-3d-model-viewer/tree/main/src](https://github.com/shehabulislam/advanced-3d-model-viewer/tree/main/src)

Included in the src folder as well.

We utilized an open-source library for model viewing: https://github.com/google/model-viewer

= Support =

For support inquiries, please visit our [support forum](https://wpshopifyexpert.com/support) or contact us at wordpress@wpshopifyexpert.com.

= Contribute =

If you'd like to contribute to the development of this plugin, visit our [GitHub repository](https://github.com/shehabulislam/advanced-3d-model-viewer).