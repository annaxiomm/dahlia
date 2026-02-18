// FILEMANAGEMENT.TS
// Filemanagement code (including Save, Open, etc)

import { getCurrentBuffer } from "./editor";

export function saveCurrentBuffer() {
	const currentBuffer = getCurrentBuffer()!;

	if (!currentBuffer.hot) {
		console.log("buffer is already saved, no need to save again");
		return;
	}

	if (currentBuffer.filepath != "") {
		saveCurrentBufferAs();
	}

	console.log(currentBuffer);
	currentBuffer.hot = false;
}

export function saveCurrentBufferAs() {
	const currentBuffer = getCurrentBuffer();
	console.log(currentBuffer);
	console.log("saving as");
}
