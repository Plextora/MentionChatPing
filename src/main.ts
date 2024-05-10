import { soundVolume, soundPitch, debugMode } from "./moduleOptions";

export const module: Module = new Module(
  "MentionChatPing",
  "MentionChatPing",
  "Plays a sound when someone mentions you in chat (Suggestion from emilyluvzzu in Latite Client Discord)",
  KeyCode.None
);

client.on("receive-chat", (ev) => {
  if (ev.isChat && module.isEnabled() && game.getLocalPlayer()?.isValid()) {
    if (
      ev.message.includes(game.getLocalPlayer()?.getName()!) ||
      ev.message.includes(
        client
          .getModuleManager()
          .getModuleByName("Nickname")
          ?.getSettings()[2]
          .getValue()
      )
    ) {
      if (module.isEnabled()) {
        game.playSoundUI(
          "random.orb",
          soundVolume.getValue(),
          soundPitch.getValue()
        );
        if (debugMode.getValue()) {
          script.log(
            `Played random.orb at vol ${soundVolume.getValue()} and pitch ${soundPitch.getValue()}`
          );
        }
      }
    }
  }
});

// adds the module into the client
client.getModuleManager().registerModule(module);
