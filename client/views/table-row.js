/* eslint-env browser */

export default function(discovery) {
    discovery.view.define('table-row', function(el, config, data, context) {
        const { cols } = config;

        if (Array.isArray(cols)) {
            cols.forEach((col, index) =>
                discovery.view.render(el, col, data, { ...context, colIndex: index })
            );
        }
    }, { tag: 'tr' });
}
