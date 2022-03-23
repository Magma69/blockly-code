Blockly.Blocks['return_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Message");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.JavaScript['return_message'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = 'await lib.discord.channels[' + '@0.3.0' + '].messages.create({' + '\n' + 'channel_id:' + '`' + text_id + '`' + statements_name + '\n});';
  return code;
};