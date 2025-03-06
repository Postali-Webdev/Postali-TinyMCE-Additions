(function() {
    tinymce.PluginManager.add('phone_number_button', function(editor, url) {
        editor.addButton('phone_number_button', {
            text: 'Phone Number',
            tooltip: 'Add phone number body',
            icon: 'plus',
            //ajax call that retrieves phone number in functions file
            onclick: function () { 
                editor.windowManager.open( {
                    title: 'Phone Number Style',
                    width: 500,
                    height: 100,
                    body: [{
                        type: 'textbox',
                        name: 'phone',
                        label: 'Phone Number',
                    },{
                        type: 'listbox',
                        name: 'style',
                        label: 'Style',
                        'values': [
                            { text: "Button", value: "btn" },
                            { text: "Text Only", value: "txt" },
                        ]
                    }],

                    onsubmit: function( e ) {
                        let $content = '<a href="tel:' + e.data.phone + '" class="' + e.data.style +'">' + e.data.phone + '</a>'
                        editor.insertContent( $content );
                    }

                });
            }
        });
    });
})();