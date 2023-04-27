// const refs = {
//     getButton: document.querySelector('.get'),
//     form: document.querySelector('.form'),
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     formUpdate: document.querySelector('.formUpdate'),
//     titleUpdate: document.querySelector('.titleUpdate'),
//     textUpdate: document.querySelector('.textUpdate'),
//     deleteButton: document.querySelector('.delete'),
// };

// //робимо на всі запити на бекенд
// const getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// // відправляємо дані на бекенд
// const createPost = (e) => {
    // e.preventDefault();
    // //зчитую дані з text and title
    // const title   = refs.title.value;
    // const body = refs.text.value;

//     //робимо запит через POST і додаємо обьєкт налаштувань
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({ title, body, id: Date.now() }),   //({ title, text })короткий запис title: title, body: text
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }; 

// //оновлюю якесь значення
// const updataPost = (e) => {
//     e.preventDefault();
//     const title   = refs.titleUpdate.value;
//     const text = refs.textUpdate.value;
//     fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: 'PATCH', //якщо в 'PUT'передамо одне значення то перезапишуться усі данні і залишиться тільки одне значення яке ми передали
//         //'PATCH' зберігаю усі данні а змінює тільки потрібне поле
//         body: JSON.stringify({title: title, text: text}),// можна передавати тільки одне значення в form(Update Title)
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8', 
//         },
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));  
// };


// //видалюємо якесь поле
// const deletePost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: 'delete',
//     }) 
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));  
// };


// refs.getButton.addEventListener('click', getPosts);
// refs.form.addEventListener('submit', createPost); 
// refs.formUpdate.addEventListener('submit', updataPost);
// refs.deleteButton.addEventListener('click', deletePost);

//////////////////////////////////////////////////////////////////////////////////
//виносимо .then за межі функції(чистий код)

// const refs = {
//     getButton: document.querySelector('.get'),
//     form: document.querySelector('.form'),
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     formUpdate: document.querySelector('.formUpdate'),
//     titleUpdate: document.querySelector('.titleUpdate'),
//     textUpdate: document.querySelector('.textUpdate'),
//     deleteButton: document.querySelector('.delete'),
// };


// const getPosts = () => {
//       return fetch('https://jsonplaceholder.typicode.com/posts')
// };
// getPosts()
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


// // відправляємо дані на бекенд
// const createPost = (e) => {
    
//     //зчитую дані з text and title
//     const title   = refs.title.value;
//     const body = refs.text.value;

//     //робимо запит через POST і додаємо обьєкт налаштувань
//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title, body, id: Date.now() }),   //({ title, text })короткий запис title: title, body: text
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
// }; 
// createPost()
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


// //оновлюю якесь значення
// const updataPost = (e) => {
    
//     const title   = refs.titleUpdate.value;
//     const text = refs.textUpdate.value;
//     return fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: 'PATCH', //якщо в 'PUT'передамо одне значення то перезапишуться усі данні і залишиться тільки одне значення яке ми передали
//         //'PATCH' зберігаю усі данні а змінює тільки потрібне поле
//         body: JSON.stringify({title: title, body: text}),// можна передавати тільки одне значення в form(Update Title)
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8', 
//         },
//     })
// };
// updataPost()
// .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));  


// //видалюємо якесь поле
// const deletePost = () => {
//    return fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: 'delete',
//     }) 
// };
// deletePost()
// .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));  

// refs.getButton.addEventListener('click', getPosts);
// refs.form.addEventListener('submit', createPost); 
// refs.formUpdate.addEventListener('submit', updataPost);
// refs.deleteButton.addEventListener('click', deletePost);



///////////////////////////////////////////////////////////////////////////////////


// //переробляю на синтаксис async/await

// const refs = {
//     getButton: document.querySelector('.get'),
//     form: document.querySelector('.form'),
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     formUpdate: document.querySelector('.formUpdate'),
//     titleUpdate: document.querySelector('.titleUpdate'),
//     textUpdate: document.querySelector('.textUpdate'),
//     deleteButton: document.querySelector('.delete'),
// };


// const getPosts = async () => {
//     try {
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// return data;
// } catch (error) {
//     console.log(error);
// } finally {

// }
// };
    
//  const posts = getPosts();


// const createPost = async (e) => {
//     e.preventDefault();
//     //зчитую дані з text and title
//     const title   = refs.title.value;
//     const body = refs.text.value;
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({ title, body, id: Date.now() }),   //({ title, text })короткий запис title: title, body: text
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//     } catch (error) {
//         console.log(error);//тут може бути функція для виводу на екран
//     }
// };


// //оновлюю якесь значення
// const updataPost = async (e) => {
//     e.preventDefault();
//     const title   = refs.titleUpdate.value;
//     const text = refs.textUpdate.value;
//     try {
// const response = await fetch('https://jsonplaceholder.typicode.com/posts/100', {
//     method: 'PATCH', //якщо в 'PUT'передамо одне значення то перезапишуться усі данні і залишиться тільки одне значення яке ми передали
//     //'PATCH' зберігаю усі данні а змінює тільки потрібне поле
//     body: JSON.stringify({title: title, text: text}),// можна передавати тільки одне значення в form(Update Title)
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8', 
//     },
// })
// const data = await response.json();
// console.log(data);
// return data;
//     } catch (error) {
//         console.log(error);
//     }
     
// };

// //  //якщо прилетів пустий масив
// //  //Object.values() - []
// //  //Object.keys() - []

// const deletePost = async () => {
//     try {
//         fetch('https://jsonplaceholder.typicode.com/posts/100', {
//             method: 'delete',
//         })
//         const data = await response.json();
// console.log(data);
// return data;
//     } catch (error) {
//         console.log(error);
//     }  
// };
  

// refs.getButton.addEventListener('click', getPosts);
// refs.form.addEventListener('submit', createPost);  
// refs.formUpdate.addEventListener('submit', updataPost);
// refs.deleteButton.addEventListener('click', deletePost);
  ////////////////////////////////////////////////////////////////////////////////////

  // робимо запит API


//   const refs = {
//     getButton: document.querySelector('.get'),
//     form: document.querySelector('.form'),
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     formUpdate: document.querySelector('.formUpdate'),
//     titleUpdate: document.querySelector('.titleUpdate'),
//     textUpdate: document.querySelector('.textUpdate'),
//     deleteButton: document.querySelector('.delete'),
//     body: document.querySelector("body"),
// };

//   const createList = (data) => {
//     const result = data.reduce((acc, item) => (acc +=
//      `<li class='list-group-item'>${item.title}</li>`), '');
//     refs.body.insertAdjacentHTML('afterbegin', result);
//   };


//   const getPosts = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
//         createList(response.data);
//        console.log(response.data);
       
//     } catch (error) {
//         console.log(error);
//     }
//   };

//   getPosts();

//   refs.getButton.addEventListener('click', getPosts);
  ///////////////////////////////////////////////////////////


//   const refs = {
//     getButton: document.querySelector('.get'),
//     form: document.querySelector('.form'),
//     title: document.querySelector('.title'),
//     text: document.querySelector('.text'),
//     formUpdate: document.querySelector('.formUpdate'),
//     titleUpdate: document.querySelector('.titleUpdate'),
//     textUpdate: document.querySelector('.textUpdate'),
//     deleteButton: document.querySelector('.delete'),
//     body: document.querySelector("body"),
// };

//   const createPost = async (e) => {
//     e.preventDefault();
//     const title = refs.title.value;
//     const text = refs.text.value;
//     try {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title: title, body: text }, 
//     {
//      headers: {
//                      'Content-type': 'application/json; charset=UTF-8',
//                  } 
//                 }
//             ); 
//             console.log(response.data);

//     } catch (error) {
//         console.log(error);//тут може бути функція для виводу на екран
//     }
// };
// createPost();

// refs.form.addEventListener('submit', createPost); 
/////////////////////////////////////////////////////////////////////////////////////////


const refs = {
    getButton: document.querySelector('.get'),
    form: document.querySelector('.form'),
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    formUpdate: document.querySelector('.formUpdate'),
    titleUpdate: document.querySelector('.titleUpdate'),
    textUpdate: document.querySelector('.textUpdate'),
    deleteButton: document.querySelector('.delete'),
    body: document.querySelector("body"),
};

 const deletePost = async (e) => {
    e.preventDefault();
    const title = refs.title.value;
     const text = refs.text.value;
     try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title: title, body: text }, 
        {
         headers: {
                         'Content-type': 'application/json; charset=UTF-8',
                     } 
                    }
                ); 
                console.log(response.data);
    
        } catch (error) {
            console.log(error);//тут може бути функція для виводу на екран
        }
    };

    refs.deleteButton.addEventListener('click', deletePost);