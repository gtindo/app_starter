
class WcPrimaryButton extends HTMLButtonElement {
    static observedAttributes = ["size", "color", "variant", "rounded"];

    constructor(){
        super();
        this.baseClassName = "focus:ring-4 font-medium focus:outline-none"
        this.baseSize = "md";
        this.baseColor = "primary";
        this.baseVariant = "contained";
        this.baseRounded = "lg"
        this.setClassName(this.baseSize, this.baseVariant, this.baseColor, this.baseRounded);
    }

    setClassName(size, variant, color, rounded) {
       this.className = `
            ${this.baseClassName} 
            ${this.resolveClassNames("size", size)} 
            ${this.resolveClassNames("variant", variant, color)}
            ${this.resolveClassNames("rounded", rounded)}
       `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const size = this.getAttribute("size") ?? this.baseSize;
        const variant = this.getAttribute("variant") ?? this.baseVariant;
        const color = this.getAttribute("color") ?? this.baseColor;
        const rounded = this.getAttribute("rounded") ?? this.baseRounded;
        this.setClassName(size, variant, color, rounded);
    }

    resolveClassNames(attribute, value, subValue) {
        const styles = {
            "size": {
                "xs": "px-3 py-2 text-xs",
                "sm": "px-3 py-2 text-sm",
                "md": "px-5 py-2.5 text-sm",
                "lg": "px-5 py-3 text-base",
                "xl": "px-6 py-3.5 text-base"
            },
            "rounded": {
                "none": "rounded-none",
                "sm": "rounded-sm",
                "lg": "rounded-lg",
                "xl": "rounded-xl",
                "2xl": "rounded-2xl",
                "3xl": "rounded-3xl"
            },
            "variant": {
                "contained": {
                    "primary": "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 focus:ring-primary-300 focus:ring-primary-300 text-white",
                    "secondary": "bg-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 focus:ring-secondary-300 focus:ring-secondary-300 text-white",
                    "danger": "bg-danger-700 hover:bg-danger-800 focus:ring-danger-300 focus:ring-danger-300 focus:ring-danger-300 text-white",
                    "success": "bg-success-700 hover:bg-success-800 focus:ring-success-300 focus:ring-success-300 focus:ring-success-300 text-white",
                    "warning": "bg-warning-700 hover:bg-warning-800 focus:ring-warning-300 focus:ring-warning-300 focus:ring-warning-300 text-white"
                },
                "outlined": {
                    "primary": `
                        text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-primary-300 
                        dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800`,
                    "secondary": `
                        text-secondary-700 hover:text-white border border-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 
                        dark:border-secondary-500 dark:text-secondary-500 dark:hover:text-white dark:hover:bg-secondary-500 dark:focus:ring-secondary-800`,
                    "danger": `
                        text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-danger-300 
                        dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-500 dark:focus:ring-danger-800`,
                    "success": `
                        text-success-700 hover:text-white border border-success-700 hover:bg-success-800 focus:ring-success-300 
                        dark:border-success-500 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-500 dark:focus:ring-success-800
                    `,
                    "warning": `
                        text-warning-700 hover:text-white border border-warning-700 hover:bg-warning-800 focus:ring-warning-300 
                        dark:border-warning-500 dark:text-warning-500 dark:hover:text-white dark:hover:bg-warning-500 dark:focus:ring-warning-800\`,
                    `
                }
            }
        }

        if(subValue) return styles[attribute][value][subValue];

        return styles[attribute][value];
    }
}

customElements.define("wc-button", WcPrimaryButton, {extends: "button"});