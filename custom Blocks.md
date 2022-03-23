Blockly.Blocks['return_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Message");
    this.appendStatementInput("MESSAGE")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['return_message'] = function(block) {
  var statements_message = Blockly.JavaScript.statementToCode(block, 'MESSAGE');
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

^ For the better return