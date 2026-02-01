import { registerCommand } from "../../core/command";
import { saveCurrentBuffer } from "../../editor/filemanagement";

registerCommand({
    id: "editor.save",
    label: "Save File",
    palette_visible: true,
    run: () => { saveCurrentBuffer() }
})