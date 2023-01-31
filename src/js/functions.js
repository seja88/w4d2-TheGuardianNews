const loadArticles = async (category) => {
    console.log(category);
    try {
        const response2 = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`);
        const data2 = await response2.json();
        data2.data.channel.item.forEach(element => {
            const article = document.querySelector('.article')
            article.innerHTML += `<h3>${element.title}</h3>
            ${element.description}`
        })
    } catch (error) {  

    }
}

export { loadArticles }