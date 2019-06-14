import { renderDialog } from './dialog'
import { renderButton } from './button'

window.addEventListener('DOMContentLoaded', () => {

    const config = JSON.parse('[NSB_CONFIG_PLACEHOLDER]');

    const rootEl = document.querySelector(config.rootElSelector)
    
    renderDialog(rootEl, config);
    renderButton(rootEl, config);

})