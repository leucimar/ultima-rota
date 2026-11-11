(() => {
  const config = window.ULTIMA_ROTA || {};
  document.querySelectorAll('.download-link').forEach(link => { if (config.downloadUrl) link.href = config.downloadUrl; });
  document.querySelectorAll('.release-link').forEach(link => { if (config.releaseUrl) link.href = config.releaseUrl; });
  document.querySelectorAll('.repo-link').forEach(link => { if (config.repositoryUrl) link.href = config.repositoryUrl; });
  if (config.version) document.querySelectorAll('.release-details').forEach(el => { el.textContent = `· ${config.version}${config.size ? ' · ' + config.size : ''}`; });
  const dialog = document.querySelector('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let opener;
  document.querySelectorAll('.shot').forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); opener = link;
    image.src = link.href; image.alt = link.querySelector('img').alt;
    caption.textContent = link.dataset.caption;
    dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());
})();
