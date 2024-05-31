const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer) throw new Error('$tabContainer does not exist');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($eventTarget === $tab[i]) {
        $tab[i].className = 'active tab';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  const $dataValue = $eventTarget.dataset.view;

  for (let i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === $dataValue) {
      $view[i].className = 'view ';
    } else {
      $view[i].className = 'view hidden';
    }
  }
});
