(function() {
    tinymce.PluginManager.add('5050_block', function(editor, url) {
        editor.addButton('5050_block', {
            text: '50/50 Block',
            tooltip: 'Add 50/50 columns in body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () {
                editor.windowManager.open( {
                    title: 'Add 50/50 Block',
                    width: 500,
                    height: 600,
                    body: [{
                        type: 'textbox',
                        multiline: true,
                        name: 'left_content',
                        label: 'Left Column',
                    },
                    {
                        type: 'textbox',
                        multiline: true,
                        name: 'right_content',
                        label: 'Right Column',
                    }],

                    onsubmit: function( e ) {
                        let $content = '<!-- 50/50 columm block --><div class="columns"><div class="column-50"><p>' + e.data.left_content + '</p></div><div class="column-50"><p>' + e.data.right_content + '</p></div></div><!-- end 50/50 columm block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

