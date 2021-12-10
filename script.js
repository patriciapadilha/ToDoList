//input - id #texto-tarefa
//button - id #criar-tarefa
//ol - id #lista-tarefas

let input = document.getElementById('texto-tarefa');
let toDoButton = document.getElementById('criar-tarefa');
let listOl = document.getElementById('lista-tarefas');
console.log(input);

//5
// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

function getText (){
    toDoButton.addEventListener('click' , function () {
        let toDo = input.value;
        // console.log(toDo);
        let item = document.createElement('li');
        item.innerText = toDo;
        listOl.appendChild(item);
    })

}

getText ()


