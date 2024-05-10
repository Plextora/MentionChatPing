import { module } from "./main";

export let debugMode = module.addBoolSetting(
  "DebugMode",
  "Debug mode",
  "Logs stuff to chat",
  false
);

export let soundVolume = module.addNumberSetting(
  "SoundVolume",
  "Sound volume",
  "Loudness of ping sound (default is 1)",
  0.1,
  1,
  0.1,
  1
);

export let soundPitch = module.addNumberSetting(
  "PitchVolume",
  "Pitch volume",
  "Pitch of ping sound (default is 1)",
  0.1,
  5,
  0.1,
  1
);
