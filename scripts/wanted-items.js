// ==UserScript==
// @name         Wanted Items
// @namespace    https://kircraft.io/
// @version      0.2.22
// @description  List wanted items and highlight them on scavenge wheel. Supports regex.
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

    const invGrid = await debug(`getElementById("inv-grid")`, () => {
        return getElement(() => document.getElementById("inv-grid"));
    });

    const searchId = "want-search";
    const addBtnId = "want-add-btn";
    const listId = "want-list";

    invGrid.insertAdjacentHTML("afterend", `
        <!-- @pseudoical -->
        <div class="want-container">
            <div class="ignore-list-label">
                Wanted items
            </div>
            <div class="ignore-add-row">
                <input type="text" class="ignore-search" id="${searchId}"
                    placeholder="Add by item name…" autocomplete="off">
                <button type="button" class="kui-btn kui-btn--primary" id="${addBtnId}">Add</button>
            </div>
            <div class="ignore-list" id="${listId}">
                <!-- When a row is added
                <div class="ignore-row" data-name="test">
                    <span class="ignore-row-name">test</span>
                    <button type="button" class="ignore-remove" title="Remove from want list">Remove</button>
                </div> -->
                <!-- When the list is empty
                <div class="ignore-empty">
                    No items on your want list. Type a name above or right-click an item to add it.
                </div> -->
            </div>
        </div>
    `);

    class Storage {
        static key = "@pseudoical_wanted_items";

        /**
         * @returns {string[]}
         */
        static getItems() {
            let items = localStorage.getItem(Storage.key);

            if (items === null) {
                items = JSON.stringify([]);
                localStorage.setItem(Storage.key, items);
            }

            return JSON.parse(items);
        }

        static itemsCache = /** @type {Set<string>} */ (new Set());
        static itemsRegExpCache = /** @type {Set<RegExp>} */ (new Set());

        /**
         * @param {string[]} items
         */
        static updateItemsCache(items) {
            Storage.itemsCache = new Set();
            Storage.itemsRegExpCache = new Set();

            for (const item of items) {
                Storage.itemsCache.add(item);

                try {
                    Storage.itemsRegExpCache.add(new RegExp(item));
                } catch { }
            }
        }

        /**
         * @param {string[]} items
         */
        static setItems(items) {
            localStorage.setItem(Storage.key, JSON.stringify(items));
            Storage.updateItemsCache(items);
            return Storage.itemsCache;
        }

        /**
         * @param {string} item
         */
        static setItem(item) {
            const items = Storage.getItems();
            items.unshift(item);
            Storage.setItems(items);
            return Storage.itemsCache;
        }

        /**
         * @param {string} item
         */
        static removeItem(item) {
            const items = Storage.getItems();
            return Storage.setItems(items.filter((curr) => curr !== item));
        }
    }

    Storage.updateItemsCache(Storage.getItems());

    const list = await debug(`getElementById("${listId}")`, () => {
        return getElement(() => document.getElementById(listId));
    });

    const rowClass = "ignore-row";
    const removeClass = "ignore-remove";

    /**
     * @param {Set<string>} items
     */
    function renderList(items) {
        list.innerHTML = "";

        if (items.size === 0) {
            list.innerHTML = `
                <div class="ignore-empty">
                    No items on your want list. Type a name above or right-click an item to add it.
                </div>
            `;

            return;
        }

        for (const item of items) {
            list.insertAdjacentHTML("beforeend", `
                <div class="${rowClass}" data-name="${item}">
                    <span class="ignore-row-name">${item}</span>
                    <button type="button" class="${removeClass}">Remove</button>
                </div>
            `);
        }
    }

    const search = await debug(`getElementById("${searchId}")`, () => {
        return getElement(() => document.getElementById(searchId));
    });

    function addInputItem() {
        if (!(search instanceof HTMLInputElement)) {
            console.error("!(input instanceof HTMLInputElement)", { search });
            return;
        }

        const item = search.value.trim().toLowerCase();
        let items = Storage.itemsCache;

        if (item !== "" && !items.has(item)) {
            items = Storage.setItem(item);
        }

        search.value = "";
        renderList(items);
    }

    search.addEventListener("keydown", async (ev) => {
        if (ev.key === "Enter") {
            addInputItem();
        }
    });

    const addBtn = await debug(`getElementById("${addBtnId}")`, () => {
        return getElement(() => document.getElementById(addBtnId));
    });

    addBtn.addEventListener("click", async (_ev) => {
        addInputItem();
    });

    list.addEventListener("click", async (ev) => {
        const target = ev.target;

        if (!(target instanceof Element)) {
            return;
        }

        const btn = target.closest(`.${removeClass}`);

        if (btn === null) {
            return;
        }

        const row = btn.closest(`.${rowClass}`);

        if (!(row instanceof HTMLElement)) {
            return;
        }

        row.remove();
        const item = row.dataset.name;
        renderList(item !== undefined ? Storage.removeItem(item) : Storage.itemsCache);
    });

    renderList(Storage.itemsCache);

    const scavengeOverlay = await debug(`getElementById("scavenge-overlay")`, () => {
        return getElement(() => document.getElementById("scavenge-overlay"));
    });

    /**
     * @param {string} text
     */
    function isItemWanted(text) {
        if (Storage.itemsCache.has(text)) {
            return true;
        }

        for (const regExp of Storage.itemsRegExpCache) {
            if (regExp.test(text)) {
                return true;
            }
        }

        return false;
    }

    const observer = new MutationObserver(async (mutations) => {
        for (const mutation of mutations) {
            const node = mutation.target;

            if (!(node instanceof HTMLElement)) {
                return;
            }

            const text = node.textContent;
            // Highlight wanted items on the scavenge wheel.
            node.style.filter = text !== null && isItemWanted(text.toLowerCase()) ? "invert(1)" : "";

            // Mutations always occur when standing over items; throttle for performance.
            await new Promise((resolve) => window.requestAnimationFrame(resolve));
        }
    });

    observer.observe(scavengeOverlay, { childList: true, subtree: true, characterData: true });
})();
