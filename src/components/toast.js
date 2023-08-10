class ToastComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.render();
	}

	connectedCallback() {
		// Listen for slide changes
		Reveal.addEventListener("slidechanged", this.updateToast.bind(this));
		this.updateToast(); // Initial check
	}

	updateToast() {
		const currentSlide = Reveal.getCurrentSlide();
		const toastContent = currentSlide.querySelector(".toast");

		if (toastContent) {
			this.shadowRoot.querySelector(".toast-container").innerHTML = toastContent.innerHTML;
			this.shadowRoot.querySelector(".toast-container").style.display = "block";
		} else {
			this.shadowRoot.querySelector(".toast-container").style.display = "none";
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
            <style>
                .toast-container {
                    position: fixed;
                    bottom: 1rem;
                    left: 1rem;
                    z-index: 1000;
                    background-color: var(--toast-bg);
                    padding: 10px;
                    display: none;
					color: var(--toast-color);
					font-size: calc(var(--toast-size) * 2);
					font-family: var(--toast-font);
					font-weight: var(--toast-font-weight);
					line-height: var(--toast-line-height);
					letter-spacing: var(--toast-letter-spacing);
					text-transform: var(--toast-text-transform);
                }

				.toast-container a {
					color: var(--toast-link-color);
					text-decoration: var(--toast-link-text-decoration);
					transition: color 0.3s ease;
				}

				.toast-container a:hover, .toast-container a:focus {
					color: var(--toast-link-hover-color);
					text-decoration: var(--toast-link-hover-text-decoration);
				}
            </style>
            <div class="toast-container"></div>
        `;
	}
}

// Define the custom element
customElements.define("toast-component", ToastComponent);
