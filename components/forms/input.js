

class WcInput extends HTMLInputElement {

    observedAttributes = ["variant"];
    constructor() {
        super();
        this.className = this.variantStyles.default;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name == "variant") {
            if(value === "error") this.className = this.variantStyles.error;
            else this.className = this.variantStyles.default;
        }
    }

    variantStyles = {
        default: `
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-primary-500 focus:border-primary-500 inline-block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-primary-500 dark:focus:border-primary-500
        `,
        error: `
            bg-danger-50 border border-danger-500 text-danger-900 placeholder-danger-700
            text-sm rounded-lg focus:ring-danger-500 dark:bg-gray-700 focus:border-danger-500
            inline-block w-full p-2.5 dark:text-danger-500 dark:placeholder-danger-500 dark:border-danger-500
        `
    }
}

customElements.define("wc-input", WcInput, {extends: "input"})
