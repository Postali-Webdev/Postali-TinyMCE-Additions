(function() {
    tinymce.PluginManager.add('map_embed', function(editor, url) {
        editor.addButton('map_embed', {
            text: 'Map Block',
            tooltip: 'Add map block in body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () {
                editor.windowManager.open( {
                    title: 'Add Map Block',
                    width: 800,
                    height: 400,
                    body: [{
                        type: 'textbox',
                        name: 'height',
                        label: 'Map Height',
                        value: "Number only, no additional text."
                    },
                    {
                        type: 'textbox',
                        multiline: true,
                        name: 'map_iframe',
                        label: 'Map Iframe Code',
                        value: "Only use the SRC URL portion of the embed code, between the quotes that starts with https://. Do not use the entire iframe code as that may break things."
                    }],

                    onsubmit: function( e ) {
                        let $content = '<!-- map block --><div class="map-block" style="width:100%; height:' + e.data.height + 'px;">[map_start]' + e.data.map_iframe + ' [map_end]</div><!-- end map block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

