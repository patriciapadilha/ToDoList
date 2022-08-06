const input = document.getElementById('texto-tarefa');
const toDoButton = document.getElementById('criar-tarefa');
const listOl = document.getElementById('lista-tarefas');
const cleanButton = document.getElementById('apaga-tudo');
const cleanCompletedButton = document.getElementById('remover-finalizados');

function getText() {
  toDoButton.addEventListener('click', () => {
    const toDo = input.value;
    if (input.value !== '') {
      const item = document.createElement('li');
      item.innerText = toDo;
      listOl.appendChild(item);
      input.value = '';
    }
  });
}

function changeBackground() {
  listOl.addEventListener('click', (event) => {
    const listLi = document.querySelectorAll('li');
    for (let index = 0; index < listLi.length; index += 1) {
      if (listLi[index].style.backgroundColor === 'rgb(220, 220, 220)') {
        listLi[index].style.backgroundColor = 'rgb(249, 228, 231)';
      }
    }
    event.target.style.backgroundColor = 'rgb(220, 220, 220)';
  });
}

function itemCompleted() {
  listOl.addEventListener('dblclick', (event) => {
    if (event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
    }
  });
}

function cleanAllButton() {
  cleanButton.addEventListener('click', () => {
    const listLi = document.querySelectorAll('li');
    for (let index = 0; index < listLi.length; index += 1) {
      const element = listLi[index];
      listOl.removeChild(element);
    }
  });
}

function cleanCompleted() {
  cleanCompletedButton.addEventListener('click', () => {
    const listLi = document.querySelectorAll('li');
    for (let index = 0; index < listLi.length; index += 1) {
      if (listLi[index].className === 'completed') {
        listOl.removeChild(listLi[index]);
      }
    }
  });
}

getText();
changeBackground();
itemCompleted();
cleanAllButton();
cleanCompleted();
