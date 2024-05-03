
const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length} `);

const categoriesArray = [...categories].map
    (categories => `Category : ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`)
    .join("\n");
console.log(categoriesArray);

