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
                    width: 500,
                    height: 600,
                    body: [{
                        type: 'textbox',
                        name: 'height',
                        label: 'Map Height',
                    },
                    {
                        type: 'textbox',
                        multiline: true,
                        name: 'map_iframe',
                        label: 'Map Iframe Code',
                    }],

                    onsubmit: function( e ) {
                        let $content = '<!-- map block --><div class="map-block" style="width:100%; height:' + e.data.height + '"><iframe src="' + e.data.map_iframe + '" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><!-- end map block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

