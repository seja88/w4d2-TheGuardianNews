import { loadArticles } from './functions'

const nav = document.querySelector('nav')
const ul = document.createElement('ul')
nav.appendChild(ul)
const article = document.querySelector('.article')

const loadData = async () => {
    try {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
        const data = await response.json();
        console.log(data);
        data.data.forEach(element => {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = `<li>${element}</li>`
            li.addEventListener('click', () => {
                article.innerHTML = ''
                loadArticles(element)
            })
            console.log(element);
        });


    } catch (error) {
        console.log('Error is: ', error);
    } finally {

    }
};

loadData()