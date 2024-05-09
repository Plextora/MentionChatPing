const module = new Module(
  "MentionChatPing",
  "MentionChatPing",
  "Plays a sound when someone mentions you in chat (Suggestion from emilyluvzzu in Latite Client Discord)",
  KeyCode.Numpad1
);

// adds the module into the client
client.getModuleManager().registerModule(module);
