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

Blockly.Blocks['return_dm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return DM Message");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("User ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("The text that will send back to the user");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Message Body");
    this.appendDummyInput()
        .appendField("Text: ")
        .appendField(new Blockly.FieldTextInput("I love Blockly!"), "TEXT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("The text that will send back to the user");
 this.setHelpUrl("");
  }
};

//Code Generators: 
Blockly.JavaScript['return_message'] = function(block) {
  var statements_message = Blockly.JavaScript.statementToCode(block, 'MESSAGE');
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['return_dm'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['message_body'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};