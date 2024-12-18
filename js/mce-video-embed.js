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
                        let $content = '<!-- video block --><div class="video-embed"><iframe class="responsive-video" width="560" height="315" src="https://www.youtube.com/embed/' + e.data.video_id + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><!-- end video block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

