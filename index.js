'use strict';

async function getCategories() {
    const res = await fetch('https://jservice.io/api/categories?count=4&offset=30');
    const categories = await res.json();
    return categories;
};

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        <div class="my-category-clue" style="grid-row-start: 2">$100</div>
        <div class="my-category-clue" style="grid-row-start: 3">$200</div>
        <div class="my-category-clue" style="grid-row-start: 4">$300</div>
        <div class="my-category-clue" style="grid-row-start: 5">$400</div>
    `;
};


getCategories().then(categories => {
    document.body.innerHTML = `
        <div class="board">
            ${categories.map(getCategoryHtml).join('')}
        </div>
    `;
});