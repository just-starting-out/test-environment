function parseHTML(document: Document, html: string): DocumentFragment {
    const template = document.createElement('template');
    // eslint-disable-next-line github/no-inner-html
    template.innerHTML = html;
    return document.importNode(template.content, true);
}
function serialize(form: HTMLFormElement): string {
    const params = new URLSearchParams();
    const entries = new FormData(form).entries();
    for (const [name, value] of [...entries]) {
        params.append(name, value.toString());
    }
    return params.toString();
}