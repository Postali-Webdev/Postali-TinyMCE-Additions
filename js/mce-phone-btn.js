(function() {
    tinymce.PluginManager.add('phone_number_button', function(editor, url) {
        editor.addButton('phone_number_button', {
            text: 'Phone Number',
            tooltip: 'Add phone number body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () {
                jQuery.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'get_phone_number',
                        phone_number: '<?php echo $phone_number; ?>'
                    },
                        success: function (response) {
                        phone = response;
                    }
                });  

                editor.windowManager.open( {
                    title: 'Phone Number Style',
                    width: 500,
                    height: 100,
                    body: [{
                        type: 'listbox',
                        name: 'style',
                        label: 'Style',
                        'values': [
                            { text: "Button", value: "btn" },
                            { text: "Text Only", value: "txt" },
                        ]
                    }],

                    onsubmit: function( e ) {
                        let $content = '<a href="' + phone + '" class="' + e.data.style +'">' + phone + '</a>'
                        editor.insertContent( $content );
                    }

                });
            }
        });
    });
})();