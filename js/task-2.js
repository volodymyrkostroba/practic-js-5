const refs = {
    p:document.querySelector('.task-2>p'),
    input:document.querySelector('.task-2>input'),
}

refs.input.addEventListener('keydown', function (e) {
    if(e.code !== 'Enter'){
       return
    }

    const str = e.target.value.split(' ').join(',');

    refs.p.textContent = str;
});