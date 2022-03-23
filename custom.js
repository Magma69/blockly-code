Blockly.defineBlocksWithJsonArray([
  [{
    "type": "message",
    "message0": "context.message.text",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "prefix",
    "message0": "prefix %1 command %2",
    "args0": [
      {
        "type": "field_input",
        "name": "PREFIX",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "COMMAND",
        "text": ""
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "return_message",
    "message0": "message.create %1",
    "args0": [
      {
        "type": "field_input",
        "name": "CHANNEL",
        "text": ""
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "Sends a message in a channel",
    "helpUrl": ""
  },
  {
    "type": "return_message_message",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "\"ping\""
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "The text that will send back to the user",
    "helpUrl": ""
  },
  {
    "type": "text",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "\"ping\""
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "The text that will send back to the user",
    "helpUrl": ""
  },
  {
    "type": "user_text",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "\"ping\""
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "The text that will send back to the user",
    "helpUrl": ""
  }]
  ])