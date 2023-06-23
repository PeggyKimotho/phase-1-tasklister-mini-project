document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const inputBox = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  function addTask(e) {
    e.preventDefault();

      let li = document.createElement('li');
      li.textContent = inputBox.value;
      tasks.appendChild(li);
      let span = document.createElement('span');
      span.textContent = '   x';
      li.appendChild(span); 
      inputBox.value = "";
    
  }
  form.addEventListener('submit', addTask)

  tasks.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  })
});
