function toggleTheme(div) {
    document.body.classList.toggle('dark-theme-variables');
    div.querySelector('i:nth-child(1)').classList.toggle('active');
    div.querySelector('i:nth-child(2)').classList.toggle('active');
}