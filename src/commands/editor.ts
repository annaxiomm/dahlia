import { registerCommand } from "../core/command";
import { createBuffer, currentBuffer, deleteBuffer } from "../editor/editor";
import { saveCurrentBuffer } from "../editor/filemanagement";

registerCommand({
	id: "editor.save",
	label: "editor: save",
	palette_visible: true,
	run: () => {
		saveCurrentBuffer();
	},
});

registerCommand({
	id: "editor.closeactiveitem",
	label: "editor: close active item",
	palette_visible: true,
	run: () => {
		deleteBuffer(currentBuffer);
	},
});

registerCommand({
	id: "editor.newfile",
	label: "editor: new file",
	palette_visible: true,
	run: () => {
		createBuffer("", "");
	},
});
