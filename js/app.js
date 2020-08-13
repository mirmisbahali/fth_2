const progress = document.querySelector('.progress-done');
const progressText = document.querySelector('.progress_text .percentage');


progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;
// progressText.innerHTML = `${progress.getAttribute('data-done')}%`;
progressText.innerHTML = `${progress.getAttribute('data-done')}%<div class="stick"></div>`;

progressText.style.left = progress.getAttribute('data-done') + '%';

if (progress.getAttribute('data-done') == 100) {
    progressText.style.opacity = 0;
}



