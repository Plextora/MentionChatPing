export const module: Module = new Module(
  "MentionChatPing",
  "MentionChatPing",
  "Plays a sound when someone mentions you in chat (Suggestion from emilyluvzzu in Latite Client Discord)",
  KeyCode.None
);

client.on("receive-chat", (ev) => {
  if (ev.isChat && module.isEnabled() && game.getLocalPlayer()?.isValid()) {
    if (ev.message.includes(game.getLocalPlayer()?.getName()!)) {
      if (module.isEnabled()) {
        game.playSoundUI("random.orb", 1, 1);
      }
    }
  }
});

// adds the module into the client
client.getModuleManager().registerModule(module);
