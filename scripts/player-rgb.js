// ==UserScript==
// @name         Player RGB
// @namespace    https://kircraft.io/
// @version      0.2.22
// @description  Animate all characters with RGB effect.
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

    /**
     * @typedef {{
     *     speed: number;
     *     saturation: number;
     *     brightness: number;
     *     isColor: boolean;
     *     isEmissive: boolean;
     *     isWireframe: boolean;
     * }} Settings
     */

    class Storage {
        static key = "@pseudoical_player_rgb";

        /** @satisfies {Settings} */
        static defaultSettings = {
            speed: 270,
            saturation: 1,
            brightness: 1,
            isColor: true,
            isEmissive: true,
            isWireframe: false,
        };

        static getSettings() {
            let settings = localStorage.getItem(Storage.key);

            if (settings === null) {
                settings = JSON.stringify(Storage.defaultSettings);
                localStorage.setItem(Storage.key, settings);
            }

            return /** @type {Settings} */ (JSON.parse(settings));
        }

        /**
         * @param {Settings} settings
         */
        static setSettings(settings) {
            localStorage.setItem(Storage.key, JSON.stringify(settings));
        }

    }

    const settings = Storage.getSettings();

    /**
     * @typedef {{
     *     name: string;
     *     color: {
     *         r: number;
     *         g: number;
     *         b: number;
     *     };
     *     emissive: {
     *         r: number;
     *         g: number;
     *         b: number;
     *     };
     *     wireframe: boolean;
     * }} Player
     */

    /**
     * @typedef {Readonly<Pick<Player, "color" | "emissive">>} Default
     */

    const window_WeakMap = window.WeakMap;

    /** @type {Player[]} */
    let players = [];

    /** @type {Default[]} */
    let defaults = [];

    // @ts-expect-error ts(2510)
    window.WeakMap = /** @type {WeakMapConstructor} */ (class extends window_WeakMap {
        /**
         * @param  {ConstructorParameters<typeof WeakMap>} args
         */
        constructor(...args) {
            super(...args);
        }

        /**
         * @param {Parameters<typeof WeakMap.prototype.set>[0]} key
         * @param {Parameters<typeof WeakMap.prototype.set>[1]} value
         */
        set(key, value) {
            if ("name" in key && key.name === "player.001") {
                const player = /** @type {Player} */(key);
                players.push(player);

                const color = Object.freeze({ ...player.color });
                const emissive = Object.freeze({ ...player.emissive });
                defaults.push({ color, emissive });

                console.log(player);
            }

            return super.set(key, value);
        }
    });

    /**
     * https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB
     * @param {number} h hue [0, 360)
     * @param {number} s saturation [0, 1]
     * @param {number} v value [0, 1]
     */
    function HSVtoRGB(h, s, v) {
        const c = s * v;
        const hPrime = h / 60;
        const x = c * (1 - Math.abs(hPrime % 2 - 1));
        const [r, g, b] = (() => {
            if (0 <= hPrime && hPrime < 1) {
                return [c, x, 0];
            } else if (1 <= hPrime && hPrime < 2) {
                return [x, c, 0];
            } else if (2 <= hPrime && hPrime < 3) {
                return [0, c, x];
            } else if (3 <= hPrime && hPrime < 4) {
                return [0, x, c];
            } else if (4 <= hPrime && hPrime < 5) {
                return [x, 0, c];
            } else if (5 <= hPrime && hPrime < 6) {
                return [c, 0, x];
            } else {
                // Should never happen; keep for type checking.
                return [0, 0, 0];
            }
        })();
        const m = v - c;
        return [r + m, g + m, b + m];
    }

    // Concurrently run animation loops as soon as possible.
    (async () => {
        while (true) {
            for (let i = 0; i < players.length; ++i) {
                const player = players[i];
                const def = defaults[i];

                // Hue rotation speed in degrees per second.
                const h = ((performance.now() / 1000) * settings.speed) % 360;
                const [r, g, b] = HSVtoRGB(h, settings.saturation, settings.brightness);

                if (settings.isColor) {
                    player.color.r = r;
                    player.color.g = g;
                    player.color.b = b;
                } else {
                    player.color.r = def.color.r;
                    player.color.g = def.color.g;
                    player.color.b = def.color.b;
                }

                if (settings.isEmissive) {
                    player.emissive.r = r;
                    player.emissive.g = g;
                    player.emissive.b = b;
                } else {
                    player.emissive.r = def.emissive.r;
                    player.emissive.g = def.emissive.g;
                    player.emissive.b = def.emissive.b;
                }

                player.wireframe = settings.isWireframe;
            }

            await new Promise((resolve) => window.requestAnimationFrame(resolve));
        }
    })();

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

    const settingsPanel = await debug(`getElementById("settings-panel")`, () => {
        return getElement(() => document.getElementById("settings-panel"));
    });

    settingsPanel.style = "left: 30% !important;";

    /**
     * @template T
     * @typedef {{
     *     [K in keyof typeof settings]: typeof settings[K] extends T ? K : never;
     * }[keyof typeof settings]} SettingsKeys
     */

    /**
     * @typedef {{
     *     max: number;
     *     step: number;
     * }} SliderOptions
     */

    class Setting {
        /**
         * @param {Element} body
         */
        constructor(body) {
            this.body = body;
        }

        /**
         * @param {string} label
         */
        addSection(label) {
            const section = document.createElement("div");
            section.className = "settings-section-lbl";
            section.textContent = label;

            this.body.appendChild(section);

            return section;
        }

        /**
         * @param {SettingsKeys<boolean>} setting
         */
        static createToggle(setting) {
            const el = document.createElement("input");
            el.type = "checkbox";
            el.className = "settings-checkbox";
            el.dataset.key = `PlayerRGB.${setting}`;
            return el;
        }

        /**
         * @param {string} label
         * @param {SettingsKeys<boolean>} setting
         */
        async addToggleRow(label, setting) {
            const tmpl = Setting.createToggle(setting);

            this.body.insertAdjacentHTML("beforeend", `
                <div class="settings-row">
                    <span class="settings-label">${label}</span>
                    <label class="settings-toggle-wrap">
                        ${tmpl.outerHTML}
                        <span class="settings-toggle-track">
                            <span class="settings-toggle-thumb"></span>
                        </span>
                    </label>
                </div>
            `);

            const toggle = await debug(`querySelector(".settings-row [data-key=<tmpl.dataset.key>]")`, () => {
                return getElement(() => this.body.querySelector(`.settings-row [data-key="${tmpl.dataset.key}"]`));
            });

            if (!(toggle instanceof HTMLInputElement)) {
                console.error("!(toggle instanceof HTMLInputElement)");
                return tmpl;
            }

            // Enable if setting is toggled.
            if (settings[setting]) {
                toggle.click();
            }

            toggle.onchange = (_ev) => {
                settings[setting] = toggle.checked;
                Storage.setSettings(settings);
            };
        }

        /**
         * @param {SettingsKeys<number>} setting
         * @param {SliderOptions} options
         */
        static createSlider(setting, options) {
            const el = document.createElement("input");
            el.type = "range";
            el.className = "settings-slider";
            el.dataset.key = `PlayerRGB.${setting}`;
            el.min = (0).toString();
            el.max = options.max.toString();
            el.step = options.step.toString();
            el.value = settings[setting].toString();
            return el;
        }

        /**
         * @param {HTMLInputElement} slider
         */
        static createSliderValue(slider) {
            const el = document.createElement("span");
            el.className = "settings-value";
            el.dataset.val = slider.dataset.key;
            el.textContent = slider.value;
            return el;
        }

        /**
         * @param {string} label
         * @param {SettingsKeys<number>} setting
         * @param {SliderOptions} options
         */
        async addSliderRow(label, setting, options) {
            const sliderTmpl = Setting.createSlider(setting, options);
            const valueTmpl = Setting.createSliderValue(sliderTmpl);

            this.body.insertAdjacentHTML("beforeend", `
                <div class="settings-row">
                    <span class="settings-label">${label}</span>
                    ${sliderTmpl.outerHTML}
                    ${valueTmpl.outerHTML}
                </div>
            `);

            const slider = await debug(`querySelector(".settings-row [data-key=<sliderTmpl.dataset.key>]")`, () => {
                return getElement(() => this.body.querySelector(
                    `.settings-row [data-key="${sliderTmpl.dataset.key}"]`));
            });

            if (!(slider instanceof HTMLInputElement)) {
                console.error("!(slider instanceof HTMLInputElement)");
                return sliderTmpl;
            }

            const value = await debug(`querySelector(".settings-row [data-val=<valueTmpl.dataset.val>]")`, () => {
                return getElement(() => this.body.querySelector(
                    `.settings-row [data-val="${valueTmpl.dataset.val}"]`));
            });

            if (!(value instanceof HTMLSpanElement)) {
                console.error("!(value instanceof HTMLSpanElement)");
                return valueTmpl;
            }

            // Move slider to initial position.
            slider.value = sliderTmpl.value;
            slider.dispatchEvent(new Event("input"));

            slider.oninput = (_ev) => {
                value.textContent = slider.value;
                settings[setting] = Number(slider.value);
                Storage.setSettings(settings);
            };
        }
    }

    /**
     * @param {Element} body
     */
    async function createSettings(body) {
        const setting = new Setting(body);
        setting.addSection("Player RGB");
        await setting.addToggleRow("Wireframe", "isWireframe");
        await setting.addToggleRow("Color", "isColor");
        await setting.addToggleRow("Emissive", "isEmissive");
        await setting.addSliderRow("Speed", "speed", { max: 720, step: 1 });
        await setting.addSliderRow("Saturation", "saturation", { max: 1, step: 0.01 });
        await setting.addSliderRow("Brightness", "brightness", { max: 1, step: 0.01 });
    }

    const observer = new MutationObserver(async (mutations) => {
        const removedNodes = mutations[0].removedNodes;

        // If not tab switch or removed node is slider textContent.
        if (removedNodes.length === 0 || (removedNodes.length === 1 && removedNodes[0] instanceof Text)) {
            return;
        }

        const tab = await debug(`querySelector(".settings-tab.active")`, () => {
            return getElement(() => settingsPanel.querySelector(".settings-tab.active"));
        });

        if (!(tab instanceof HTMLElement)) {
            console.error("!(tab instanceof HTMLElement)");
            return;
        }

        if (tab.dataset.tab === undefined) {
            console.error("tab.dataset.tab === undefined");
            return;
        }

        if (tab.dataset.tab === "graphics") {
            const body = await debug(`querySelector(".settings-body")`, () => {
                return getElement(() => settingsPanel.querySelector(".settings-body"));
            });

            await createSettings(body);
        }
    });

    observer.observe(settingsPanel, { subtree: true, childList: true });
})();
