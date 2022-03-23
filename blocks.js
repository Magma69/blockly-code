//< Lots of scripts that make some of the blocks work 
//<script>
Blockly.Blocks['return_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Image");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "CHANNEL");
    this.appendDummyInput()
        .appendField("Image Link")
        .appendField(new Blockly.FieldTextInput("https://i.imgur.com/QJgkfKC.jpg"), "IMAGE");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("Sends a image back into a channel that you say");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_embed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Embed");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.appendDummyInput()
        .appendField("Embed Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.appendDummyInput()
        .appendField("Embed Name")
        .appendField(new Blockly.FieldTextInput("Jellybean"), "NAME");
    this.appendDummyInput()
        .appendField("Embed Description")
        .appendField(new Blockly.FieldTextInput("Jellybean is a Hamster and is AWESOME"), "DISC");
    this.appendDummyInput()
        .appendField("Embed Footer")
        .appendField(new Blockly.FieldTextInput("Please send me one"), "FOOT");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("Returns a Embed message in a channel");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.create");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_interaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.interaction");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_prefix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prefix")
        .appendField(new Blockly.FieldTextInput("!"), "PREFIX")
        .appendField("Command")
        .appendField(new Blockly.FieldTextInput("ping"), "COMMAND");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Message");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.appendDummyInput()
        .appendField("Context")
        .appendField(new Blockly.FieldTextInput("Pong!"), "CONTEXT");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['return'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("RETURN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['message_context'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.context");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//</script>
//<script>
Blockly.JavaScript['message_prefix'] = function(block) {
  var text_prefix = block.getFieldValue('PREFIX');
  var text_command = block.getFieldValue('COMMAND');
  // TODO: Assemble JavaScript into code variable.
  var code = 'context.params.event.content.startsWith(`' + text_prefix + text_command + '`)';
  // TODO: Change ORDER_NONE to the correct strength.
return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//</script>
//<script>
Blockly.JavaScript['return'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'await.lib.discord.channels[' + '@0.3.0' + '].messages.create({\n';
  return code;
};
//</script>
//<script>
Blockly.JavaScript['return_message'] = function(block) {
  var text_id = block.getFieldValue('ID');
  var text_context = block.getFieldValue('CONTEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'channel_id: ' + text_id + ',' + '\n' + 'content: ' + text_context  + '\n});\n';
  return code;
};
//</script><!-- Lots of scripts that make some of the blocks work -->
//<script>
Blockly.Blocks['return_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Image");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "CHANNEL");
    this.appendDummyInput()
        .appendField("Image Link")
        .appendField(new Blockly.FieldTextInput("https://i.imgur.com/QJgkfKC.jpg"), "IMAGE");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("Sends a image back into a channel that you say");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_embed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Embed");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.appendDummyInput()
        .appendField("Embed Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.appendDummyInput()
        .appendField("Embed Name")
        .appendField(new Blockly.FieldTextInput("Jellybean"), "NAME");
    this.appendDummyInput()
        .appendField("Embed Description")
        .appendField(new Blockly.FieldTextInput("Jellybean is a Hamster and is AWESOME"), "DISC");
    this.appendDummyInput()
        .appendField("Embed Footer")
        .appendField(new Blockly.FieldTextInput("Please send me one"), "FOOT");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("Returns a Embed message in a channel");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.create");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_interaction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.interaction");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['message_prefix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prefix")
        .appendField(new Blockly.FieldTextInput("!"), "PREFIX")
        .appendField("Command")
        .appendField(new Blockly.FieldTextInput("ping"), "COMMAND");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['return_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Message");
    this.appendDummyInput()
        .appendField("Channel ID")
        .appendField(new Blockly.FieldTextInput("1234567890"), "ID");
    this.appendDummyInput()
        .appendField("Context")
        .appendField(new Blockly.FieldTextInput("Pong!"), "CONTEXT");
    this.setPreviousStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['return'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("RETURN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['message_context'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("message.context");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//</script>
//<script>
Blockly.JavaScript['message_prefix'] = function(block) {
  var text_prefix = block.getFieldValue('PREFIX');
  var text_command = block.getFieldValue('COMMAND');
  // TODO: Assemble JavaScript into code variable.
  var code = 'context.params.event.content.startsWith(`' + text_prefix + text_command + '`)';
  // TODO: Change ORDER_NONE to the correct strength.
return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//</script>
//<script>
Blockly.JavaScript['return'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'await.lib.discord.channels[' + '@0.3.0' + '].messages.create({\n';
  return code;
};
//</script>
//<script>
Blockly.JavaScript['return_message'] = function(block) {
  var text_id = block.getFieldValue('ID');
  var text_context = block.getFieldValue('CONTEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'channel_id: ' + text_id + ',' + '\n' + 'content: ' + text_context  + '\n});\n';
  return code;
};
//</script>