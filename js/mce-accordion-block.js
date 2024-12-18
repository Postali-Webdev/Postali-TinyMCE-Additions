(function() {

    tinymce.init({
        selector: '#content',
        inline: true,
        // other configurations
    });
    
    tinymce.PluginManager.add('accordion_button', function( editor, url ) {
        editor.addButton( 'accordion_button', {
        text: "Accordion",
        icon: 'plus',
        title: "Add Accordion",
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Add Accordion',
                    width: 500,
                    height: 300,
                    body: [
                    {
                        type: 'textbox',
                        name: 'acc_title',
                        label: 'Title',
                    },
                    {
                        type: 'textbox',
                        multiline: true,
                        name: 'acc_content',
                        label: 'Content',
                    }],
                    onsubmit: function( e ) {
                        let $content = '<!-- accordion block --><div class="accordions mce"><div class="accordions_title"><h3>' + e.data.acc_title + '</h3><span></span></div><div class="accordions_content" id="content"><p>' + e.data.acc_content + '</p></div></div><!-- end accordion block -->';
                        editor.insertContent( $content );
                    }
                });
            }
        });
    });
      

})();

