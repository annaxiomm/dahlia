import { registerCommand } from "../core/command";
import { toggleCommandPalette } from "../ui/command_palette";

import { exit } from "@tauri-apps/plugin-process";

registerCommand({
	id: "dahlia.openpalette",
	label: "Open Command Palette",
	palette_visible: false,
	run: () => {
		toggleCommandPalette();
	},
});

registerCommand({
	id: "dahlia.quit",
	label: "dahlia: quit",
	palette_visible: true,
	run: async () => {
		await exit(0);
	},
});
