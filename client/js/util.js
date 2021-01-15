export function asElement(str) {
    const template = document.createElement('template');
    template.innerHTML = str.trim();
    return template.content.firstChild;
}

export function asSearchItem(id, name, count) {
    const item = asElement(`<div class='item bg-light rounded d-inline-flex p-2' data-id='${id}'>${name}</div>`);
    if (count) {
        item.setAttribute('data-count', count);
        item.appendChild(asElement(`<span class='badge badge-secondary'>${count}</span>`));
    }
    return item;
}

export function asDoller(value) {
    const abs = Math.abs(value);
    const floored = Math.floor(abs);
    const formatted = String(floored).split('').reverse()
        .reduce((acc, n, i) => acc + (i > 0 && i % 3 === 0 ? ',' : '') + n, '')
        .split('').reverse().join('');
    return `${value < 0 && '-' || ''}$${formatted}${String(Number((abs - floored).toFixed(2))).substring(1)}`;
}

export function randomColor() {
    const col = () => Math.floor(Math.random() * 255);
    return `rgb(${col()},${col()},${col()})`;
}

export function toClipboard(string) {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('style', 'width: 1px; border: 0; opacity: 0;');
    document.body.appendChild(textArea);
    textArea.value = string;
    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);
}

export const toMap = (arr, idfier, mapper = a => a) => new Map(arr.map(a => [idfier(a), mapper(a)]));
