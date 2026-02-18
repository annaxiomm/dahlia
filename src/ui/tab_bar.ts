import {
	currentBuffer,
	listBuffers,
	setCurrentBuffer,
	deleteBuffer,
	getBuffer,
} from "../editor/editor";

const tabBar = document.getElementById("tabs")!;

export function reloadTabs() {
	tabBar.innerHTML = "";
	const openBuffers = listBuffers();
	openBuffers.forEach((value) => {
		const li = document.createElement("li");
		const button = document.createElement("div");

		const close = document.createElement("a");
		close.innerText = "×";
		close.classList.add("close-tab");
		close.addEventListener("click", (e) => {
			deleteBuffer(value);
			e.stopPropagation();
		});

		button.classList.add("tab");
		if (value == currentBuffer) {
			button.classList.add("active");
		}

		button.addEventListener("click", () => {
			switchBuffer(value);
		});

		const buf = getBuffer(value)!;

		if (buf.filepath == "") {
			button.innerText = "untitled";
		} else {
			button.innerText = buf.filepath;
		}

		button.appendChild(close);

		li.appendChild(button);
		tabBar?.appendChild(li);
	});
}

function switchBuffer(buffer: string) {
	if (buffer == currentBuffer) {
		return;
	}

	setCurrentBuffer(buffer);
	reloadTabs();
}
