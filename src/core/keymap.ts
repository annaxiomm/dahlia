export interface Keymap {
    key: string,
    mod: boolean,
    shift: boolean,
    command: string
}

const keymapRegistry = new Map<string, Keymap>

export function registerKeymap(keymap: Keymap) {
    let id = "";
    if (keymap.mod) {
        id += "Mod+"
    }

    if (keymap.shift) {
        id += "Shift+"
    }

    id += keymap.key

    keymapRegistry.set(id, keymap);
}

export function getKeymap(id: string) {
    return keymapRegistry.get(id);
}

registerKeymap({
    key: "p",
    mod: true,
    shift: true,
    command: "core.openpalette"
})

registerKeymap({
    key: "s",
    mod: true,
    shift: false,
    command: "editor.save"
})