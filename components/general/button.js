
class WcPrimaryButton extends HTMLButtonElement {
    constructor(){
        super();
        this.className = `
            text-white bg-primary-700 hover:bg-primary-800 focus:ring-4
            focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary-700 
            focus:outline-none dark:focus:ring-primary-800
        `
    }
}

customElements.define("btn-primary", WcPrimaryButton, {extends: "button"});