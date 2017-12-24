import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark';
import './renderer.scss';
const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    return `<h${level} class="renderer-title-${level}">${text}</h${level}>`;
};
renderer.paragraph = text => `<p class="renderer-paragraph">${text}</p>`;
renderer.table = (header, body) => {
    return (
        `<table class="renderer-table">
            <thead class="renderer-table-header">${header}</thead>
            <tbody class="renderer-table-body">${body}</tbody>
        </table>`
    );
};
renderer.link = (href, some, text) => `<a href="${href}" class="renderer-a">${text}</a>`;
renderer.list = items => `<ul class="renderer-list">${items}</ul>`;
renderer.codespan = text => `<code class="renderer-code">${text}</code>`;
renderer.blockquote = text => `<blockquote class="renderer-quote">${text}</blockquote>`;
renderer.listitem = text => `<li class="renderer-list-item">${text}</li>`;
renderer.strong = text => `<b class="renderer-strong">${text}</b>`;

marked.setOptions({
    renderer,
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});

export default marked;