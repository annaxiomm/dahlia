// EDITOR.TS
// Basic editor setup, buffer manipulation logic

import { EditorView, basicSetup } from "codemirror";
import { keymap } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { indentWithTab } from "@codemirror/commands";
import { reloadTabs } from "../ui/tab_bar";

export interface Buffer {
	id: string;
	filepath: string;
	contents: string;
	hot: boolean; // False: saved, true: unsaved
}

const editorDiv = document.getElementById("editor")!;
const cursorPosDisplay = document.getElementById("cursor-position")!;

let bufferList = new Map<string, Buffer>();
bufferList.set("default", {
	id: "default",
	filepath: "",
	contents: "",
	hot: true,
});

export let currentBuffer = "default";

const updateHandler = EditorView.updateListener.of((update) => {
	if (update.selectionSet) {
		const selection = update.state.selection;
		const cursor = selection.main.head;

		// Convert CM6's flat-string indexing to classic Line/CH
		const line = update.state.doc.lineAt(cursor);
		const ch = cursor - line.from + 1;

		cursorPosDisplay.innerText = `${line.number}:${ch}`;
	}

	if (update.docChanged) {
		updateBuffers();
	}
});

let editorView = new EditorView({
	extensions: [
		basicSetup,
		updateHandler,
		keymap.of([indentWithTab]),
		javascript(),
	],
	parent: editorDiv,
});

export function createBuffer(filepath: string, contents: string) {
	let id = crypto.randomUUID().substring(0, 8);

	bufferList.set(id, {
		id: id,
		filepath: filepath,
		contents: contents,
		hot: false,
	});

	reloadTabs();
}

export function getBuffer(id: string) {
	return bufferList.get(id);
}

export function deleteBuffer(id: string) {
	const wasCurrent = id === currentBuffer;

	bufferList.delete(id);

	// If we deleted the active buffer
	if (wasCurrent) {
		const remaining = Array.from(bufferList.keys());

		if (remaining.length > 0) {
			setCurrentBuffer(remaining[0]);
		} else {
			// Fallback empty buffer
			createBuffer("", "");
			const newId = Array.from(bufferList.keys())[0];
			setCurrentBuffer(newId);
		}
	}

	reloadTabs();
}

export function updateBuffers() {
	if (bufferList.has(currentBuffer)) {
		const filepath = bufferList.get(currentBuffer)!.filepath;
		bufferList.set(currentBuffer, {
			id: currentBuffer,
			filepath: filepath,
			contents: editorView.state.doc.toString(),
			hot: true,
		});
	}
}

export function getCurrentBuffer() {
	return bufferList.get(currentBuffer);
}

export function listBuffers() {
	return Array.from(bufferList.keys());
}

export function setCurrentBuffer(buffer: string) {
	currentBuffer = buffer;

	editorView.dispatch({
		changes: {
			from: 0,
			to: editorView.state.doc.length,
			insert: bufferList.get(currentBuffer)!.contents,
		},
	});
}

createBuffer("test.ts", "holy heck");
