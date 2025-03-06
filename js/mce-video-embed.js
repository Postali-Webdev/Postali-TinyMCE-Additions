(function() {
    tinymce.PluginManager.add('video_embed', function(editor, url) {
        editor.addButton('video_embed', {
            text: 'YouTube Embed',
            tooltip: 'Add video in body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () {
                editor.windowManager.open( {
                    title: 'YouTube Video',
                    width: 500,
                    height: 300,
                    body: [{
                        type: 'textbox',
                        name: 'video_id',
                        label: 'YouTube Video ID',
                    }],

                    onsubmit: function( e ) {
                        let $content = '<!-- video block --><div class="video-embed">[video_start]' + e.data.video_id + '[video_end]</div><!-- end video block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

