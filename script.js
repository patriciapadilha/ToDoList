//input - id #texto-tarefa
//button - id #criar-tarefa
//ol - id #lista-tarefas

let input = document.getElementById('texto-tarefa');
let toDoButton = document.getElementById('criar-tarefa');
let listOl = document.getElementById('lista-tarefas');
let listLi = document.querySelectorAll('li');
let cleanButton = document.getElementById('apaga-tudo');
let cleanCompletedButton = document.getElementById('remover-finalizados');

getText ()
changeBackground ()
itemCompleted ()
cleanAllButton ()
cleanCompleted ()



function getText (){
    toDoButton.addEventListener('click' , function () {
        let toDo = input.value;
        // console.log(toDo);
        let item = document.createElement('li');
        // item.className = 'item';
        item.innerText = toDo;
        listOl.appendChild(item);
        input.value = '';
    })
}


// // função por mudança de class:

// function changeBackground () {
//     listOl.addEventListener('click' , function (event) { 
//         let listLi = document.querySelectorAll('li');
//         for(let index = 0; index < listLi.length; index += 1){
//             if(listLi[index].className === 'changeBackground'){
//                 listLi[index].className = '';
//             }
//         }
//         event.target.className = 'changeBackground';
//     }); 
// }

// função por style:

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



function itemCompleted () {
    // console.log(listOl);
    listOl.addEventListener('dblclick' , function (event) {
        if (event.target.className === 'completed') {
            // event.target.classList.remove('completed');
            event.target.className = '';
        } else {
            // event.target.classList.add('completed');
            event.target.className = 'completed';
        }
    });
}


function cleanAllButton () {
    cleanButton.addEventListener('click' , function () {
        let listLi = document.querySelectorAll('li');
        for(let index = 0; index < listLi.length; index += 1){
            let element = listLi[index];
            listOl.removeChild(element);
        }
    })
}



function cleanCompleted () {
    cleanCompletedButton.addEventListener('click' , function () {
        let listLi = document.querySelectorAll('li');
        for(let index = 0; index < listLi.length; index += 1){
            if(listLi[index].className === 'completed'){
                listOl.removeChild(listLi[index]);
            }
        }
    })
}





