document.addEventListener("DOMContentLoaded", () => {

    const sidebar   = document.querySelector('.sidebar');
    const open  = document.querySelector('.sidebar-open');
    const close = document.querySelector('.sidebar-close');
    const search = document.querySelector('.search-btn');
    const columnBnt = Array.from(document.querySelectorAll('.column-title button'));

    open.addEventListener(('click'), () => {sidebar.classList.add('open')})

    close.addEventListener(('click'), () => {sidebar.classList.remove('open')})

    search.addEventListener(('click'), () => {document.querySelector('.search > input').classList.toggle('onSearch')})

    const handleClick = (e) => {
        e.preventDefault();
        columnBnt.forEach(node => {
            node.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }

    columnBnt.forEach(node => {
        node.addEventListener('click', handleClick)
    });


});