// EDITOR.TS
// Basic editor setup and other junk

import { EditorView, basicSetup} from "codemirror";
import { keymap } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { indentWithTab } from "@codemirror/commands";


const editorDiv = document.getElementById("editor")!
const cursorPosDisplay = document.getElementById("cursor-position")!

const updateCursorPos = EditorView.updateListener.of(update => {
    if (update.selectionSet) {
        const selection = update.state.selection;
        const cursor = selection.main.head;

        // Convert CM6's flat-string indexing to classic Line/CH
        const line = update.state.doc.lineAt(cursor);
        const ch = cursor - line.from + 1;

        cursorPosDisplay.innerText = `${line.number}:${ch}`;
    }
})

let editorView = new EditorView({
    extensions: [basicSetup, 
        updateCursorPos, 
        keymap.of([indentWithTab]),
        javascript()],
    parent: editorDiv,
})