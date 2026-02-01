// FILEMANAGEMENT.TS
// Filemanagement code (including Save, Open, etc)

import { getCurrentBuffer } from "./editor";

export function saveCurrentBuffer() {
    const currentBuffer = getCurrentBuffer()!;

    if (!currentBuffer.hot) {
        console.log("buffer is already saved, no need to save again");
        return;
    }

    console.log(currentBuffer);
    currentBuffer.hot = false;
}