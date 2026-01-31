import { registerCommand } from "../../core/command";
import { toggleCommandPalette } from "../../ui/command_palette";

registerCommand({
    id: "core.openpalette",
    label: "Open Command Palette",
    palette_visible: false,
    run: () => {
        toggleCommandPalette();
    }
})