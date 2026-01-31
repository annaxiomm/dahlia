// COMMAND.TS
// Contains all built-in commands, as well as relevant functions and interfaces

export interface Command {
    // Stable interal command ID
    id: string;

    // User-facing command label
    label: string;

    // Visible in the command palette?
    palette_visible: boolean;

    // The method that runs
    run: () => void | Promise<void>;
}

// Constant command registry - all commands are written here
const commandRegistry = new Map<string, Command>

// Helper functions
export function registerCommand(cmd: Command) {
    commandRegistry.set(cmd.id, cmd);
}

export function getCommand(id: string) {
    return commandRegistry.get(id);
}

export function runCommandFromId(id: string) {
    commandRegistry.get(id)?.run();
}

export function listCommands() {
    return Array.from(commandRegistry.keys());
}