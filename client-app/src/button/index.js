export function renderButton(rootEl, config) {
    rootEl.innerHTML = `
        <button>${config.labels.buttonLabel}</button>
    `
}