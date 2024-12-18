(function() {
    tinymce.PluginManager.add('cta_block', function(editor, url) {
        editor.addButton('cta_block', {
            text: 'CTA Block',
            tooltip: 'Add CTA block in body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () {
                editor.windowManager.open( {
                    title: 'CTA Block',
                    width: 500,
                    height: 300,
                    body: [{
                        type: 'textbox',
                        name: 'btn_txt',
                        label: 'Button Text',
                    },
                    {
                        type: 'textbox',
                        name: 'btn_link',
                        label: 'Button Link (add "tel:" if phone number)',
                    },
                    {
                        type: 'textbox',
                        name: 'txt_block',
                        label: 'Text link copy',
                    },
                    {
                        type: 'textbox',
                        name: 'txt_link',
                        label: 'Text Link (paste URL)',
                    }],

                    onsubmit: function( e ) {
                        let $content = '<!-- CTA block --><div class="on-page-cta"><p class="button"><a href="' + e.data.btn_link + '" title="Call Today" class="btn">' + e.data.btn_txt + '</a></p><p class="text"><a href="' + e.data.txt_link + '" class="form-link">' + e.data.txt_block + '</a></p></div><!-- end CTA block -->'
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
})();

