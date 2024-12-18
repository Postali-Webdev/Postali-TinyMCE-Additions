(function() {
    tinymce.PluginManager.add('two_column_list', function(editor, url) {
        editor.addButton('two_column_list', {
            text: 'Two column unordered list',
            tooltip: 'Add two column list in body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function( e ) {
                let $content = '<!-- two column list --><ul class="two-columns"><li> * your content in here * </li></ul><!-- end two column list -->'
                editor.insertContent( $content );
            }
        });
    });
})();

