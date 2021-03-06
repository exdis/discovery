/* eslint-env browser */

function maybeFix(el, type, value) {
    if (!value) {
        return;
    }

    const prefixEl = el.appendChild(document.createElement('span'));

    prefixEl.className = type;
    prefixEl.innerText = value;
}

export default function(discovery) {
    function render(el, config, data, context) {
        const { content } = config;
        let { color, text, href, prefix, postfix } = data || {};

        if (typeof data === 'string') {
            text = data;
        }

        el.style.backgroundColor = color;

        if (href) {
            el.href = href;
        }

        maybeFix(el, 'prefix', prefix);

        if (content) {
            discovery.view.render(el, content, data, context);
        } else {
            el.appendChild(document.createTextNode(String(text)));
        }

        maybeFix(el, 'postfix', postfix);
    }

    discovery.view.define('badge', render, { tag: 'a' });
    discovery.view.define('pill-badge', render, { tag: 'a' });
}
