//input - id #texto-tarefa
//button - id #criar-tarefa
//ol - id #lista-tarefas

let input = document.getElementById('texto-tarefa');
let toDoButton = document.getElementById('criar-tarefa');
let listOl = document.getElementById('lista-tarefas');

getText ()
changeBackground ()



function getText (){
    toDoButton.addEventListener('click' , function () {
        let toDo = input.value;
        // console.log(toDo);
        let item = document.createElement('li');
        item.className = 'item';
        item.innerText = toDo;
        listOl.appendChild(item);
        input.value = '';
    })
}


function changeBackground () {
    listOl.addEventListener('click' , function (event) { 
        let listLi = document.querySelectorAll('li');
        for(let index = 0; index < listLi.length; index += 1){
            if(listLi[index].style.backgroundColor === 'rgb(128, 128, 128)'){
                listLi[index].style.backgroundColor = 'rgb(255, 255, 255)';
            }
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }); 
}

// função por mudança de class:

// function changeBackground () {
//     listOl.addEventListener('click' , function (event) { 
//         let listLi = document.querySelectorAll('li');
//         for(let index = 0; index < listLi.length; index += 1){
//             console.log('eventochangeBackground');
//             document.querySelector('.changeBackground').classList.remove('changeBackground');
//             event.target.classList.add('changeBackground');
//         }
//     }); 
// }









