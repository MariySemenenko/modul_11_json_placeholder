const refs = {
    getButton: document.querySelector('.get'),
    form: document.querySelector('.form'),
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
};
//робимо на всі запити на бекенд
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

// відправляємо дані на бекенд
const createPost = (e) => {
    e.preventDefault();
    //зчитую дані з text and title
    const title   = refs.title.value;
    const body = refs.text.value;

    //робимо запит через POST і додаємо обьєкт налаштувань
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body, id: Date.now() }),   //({ title, text })короткий запис title: title, body: text
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}; 

//оновлюю якесь значення
const updataPost = (e) => {
    e.preventDefault;
    const title   = refs.title.value;
    const body = refs.text.value;
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({title, body}),
        headers: {},
    });
}


refs.getButton.addEventListener('click', getPosts);
refs.form.addEventListener('submit', createPost); 

