const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList does not exist');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget.value', eventTarget);
  console.log('eventTarget.tagname', eventTarget.tagName);

  if (eventTarget.tagName !== 'BUTTON') {
    return;
  }
  const taskListItem = eventTarget.closest('.task-list-item') as HTMLElement;
  console.log('task-list-item', taskListItem);
  taskListItem.remove();
});
