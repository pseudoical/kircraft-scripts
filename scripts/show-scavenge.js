// ==UserScript==
// @name         Show Scavenge
// @namespace    https://kircraft.io/
// @version      0.2.22
// @description  Automatically show scavenge wheel when walking over items.
// @author       pseudoical
// @match        https://kircraft.io/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

// @ts-check

(async function () {
    /**
     * @template T
     * @param {string} data
     * @param {() => T} fn
     * @returns {T}
     */
    function debug(data, fn) {
        console.log(`before ${data}`);
        const result = fn();

        if (result instanceof Promise) {
            return /** @type {T} */ (result.finally(() => console.log(`after ${data}`)));
        }

        console.log(`after ${data}`);
        return result;
    }

    await debug(`document.readyState`, async () => {
        if (document.readyState !== "complete") {
            await new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
        }
    });

    /**
     * @template {ReturnType<ParentNode["querySelector"]>} T
     * @param {() => T} getter
     * @returns {Promise<NonNullable<T>>}
     */
    function getElement(getter) {
        return new Promise((resolve) => {
            const element = getter();

            if (element !== null) {
                resolve(element);
                return;
            }

            const observer = new MutationObserver(() => {
                const element = getter();

                if (element !== null) {
                    observer.disconnect();
                    resolve(element);
                    return;
                }
            });

            observer.observe(document, { childList: true, subtree: true });
        });
    }

    // Ensure scavenge wheel exists.
    await debug(`getElementById("scavenge-overlay")`, async () => {
        await getElement(() => document.getElementById("scavenge-overlay"));
    });

    const keybindsText = localStorage.getItem("ptk_keybinds");

    if (keybindsText === null) {
        console.error("keybindsText === null");
        return;
    }

    /** @type {{ scavenge: string }} */
    const keybinds = JSON.parse(keybindsText);

    /**
     * @param {string} code
     */
    function dispatchKeyboardEvent(code) {
        const event = new KeyboardEvent("keydown", { code });
        document.dispatchEvent(event);
    }

    dispatchKeyboardEvent(keybinds.scavenge);

    function isPointerLocked() {
        return document.pointerLockElement !== null;
    }

    document.addEventListener("keydown", (event) => {
        if (isPointerLocked() && event.code === keybinds.scavenge) {
            document.exitPointerLock();
        }
    });

    const canvas = await debug(`getElementById("canvas")`, () => {
        return getElement(() => document.getElementById("canvas"));
    });

    document.addEventListener("keyup", (event) => {
        if (event.code === keybinds.scavenge) {
            dispatchKeyboardEvent(keybinds.scavenge);

            if (!isPointerLocked()) {
                canvas.requestPointerLock();
            }
        }
    });
})();
