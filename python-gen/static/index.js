define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

        // Adds a cell above current cell (will be top if no cells)
        var create_python = function() {
	if(Jupyter.notebook.get_cell(-1).is_generated){
    Jupyter.notebook.delete_cell(-1);
}
            Jupyter.notebook.insert_cell_at_bottom('code').set_text(`from nbdev.export import notebook2script 
notebook2script()`);
            Jupyter.notebook.execute_cells([-1]);
	setTimeout(function(){
var output = Jupyter.notebook.get_cell(-1).output_area.outputs[0].text;
	output=output.replaceAll('\n','\n\n');
	Jupyter.notebook.delete_cell(-1);
mk_val=Jupyter.notebook.insert_cell_at_bottom('markdown');
mk_val.set_text(output);
mk_val.is_generated=true;
            Jupyter.notebook.execute_cells([-1]);
}, 10000);
            // 
            // Button to add default cell
      }

      var defaultCellButton = function () {
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'Convert to Python',
                'icon' : 'fa-code',
                'handler': create_python
            }, 'create-py-file', 'nbdev')
        ]);
        Jupyter.keyboard_manager.command_shortcuts.add_shortcut(';,;', 'nbdev:create-py-file');
    };
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});