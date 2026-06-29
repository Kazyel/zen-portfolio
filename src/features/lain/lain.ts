export const LAIN_KEY = "lain";

export const KONAMI = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
];

// Applied before first paint to add `.lain` without a flash.
export const LAIN_SCRIPT = `(function(){try{if(localStorage.getItem("${LAIN_KEY}")==="1")document.documentElement.classList.add("lain")}catch(e){}})();`;

export function isLain(): boolean {
    return document.documentElement.classList.contains("lain");
}

export function setLain(on: boolean): void {
    document.documentElement.classList.toggle("lain", on);
    try {
        localStorage.setItem(LAIN_KEY, on ? "1" : "0");
    } catch {
        /* storage blocked */
    }
}
