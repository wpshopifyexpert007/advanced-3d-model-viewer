<?php

namespace A3DMV;

class EnableMimeType {
    private $mime_types = [
        '3dm'   => 'application/vnd.3dm',
        '3ds'   => 'application/x-3ds',
        '3mf'   => 'application/vnd.ms-3mf',
        'amf'   => 'application/x-amf',
        'bim'   => 'application/vnd.autodesk.bim',
        'brep'  => 'application/x-brep',
        'dae'   => 'application/vnd.collada+xml',
        'fbx'   => 'application/x-fbx',
        'fcstd' => 'application/x-freecad',
        'gltf'  => 'model/gltf+json',
        'glb'  => 'model/gltf+binary',
        'ifc'   => 'application/x-ifc',
        'iges'  => 'application/iges',
        'step'  => 'application/step',
        'stl'   => 'application/vnd.ms-pki.stl',
        'obj'   => 'application/x-wavefront-obj',
        'off'   => 'application/x-off',
        'ply'   => 'application/x-ply',
        'wrl'   => 'model/vrml'
    ];

    public function enable() {
        add_filter('upload_mimes', [$this, 'add_mime_types']);
        add_filter('wp_check_filetype_and_ext', [$this, 'check_filetype'], 10, 5);
    }

    public function add_mime_types($mime_types) {
        return array_merge($mime_types, $this->mime_types);
    }

    public function check_filetype($data, $file, $filename, $mimes, $real_mime = null) {
        if (!empty($data['ext']) && !empty($data['type'])) {
            return $data;
        }

        $ext = pathinfo($filename, PATHINFO_EXTENSION);

        if (array_key_exists($ext, $this->mime_types)) {
            $data['ext'] = $ext;
            $data['type'] = $this->mime_types[$ext];
        }

        return $data;
    }
}