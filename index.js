'use strict';

async function getCategories(count=5, offset=10) {
    const res = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`);
    const categories = await res.json();
    return categories;
};

function getClueHtml(price) {
    return `<div class="my-category-clue" style="grid-row-start: ${price / 100 + 1}">$${price}</div>`;
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
    `;
};


getCategories(6, 15).then(categories => {
    document.body.innerHTML = `
        <div class="board">
            ${categories.map(getCategoryHtml).join('')}
        </div>
    `;
});