/**
 * @license Copyright (c) 2014-2016, All rights reserved.
 */

CKEDITOR.plugins.add( 'noindex', {
  icons: 'noindex', // %REMOVE_LINE_CORE%
  lang: ['en', 'ru'],
  init: function( editor ) {

    editor.addCommand( 'insertNoIndex', {
      exec: function( editor ) {
        var selectedText = editor.getSelection().getSelectedText(); // Get text
        var newElement = new CKEDITOR.dom.element("noindex");       // Make <noindex>
        newElement.setText(selectedText);                           // Set text to element
        editor.insertElement(newElement);                           // Add element
      }
    });

    editor.ui.addButton( 'noIndex', {
      label: '<noindex>',
      command: 'insertNoIndex',
      toolbar: 'insert'
    });
  }
});
