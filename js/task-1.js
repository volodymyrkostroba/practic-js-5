const refs = {
    ul:document.querySelector('.task-1>ul'),
    input:document.querySelector('.task-1>input'),
}

refs.input.addEventListener('blur', function (e) {
    const str = e.target.value;
    const arr = str.split(' ');

    arr.forEach(element => {
       if(element !== ''){
        refs.ul.insertAdjacentHTML('beforeend', getMarkap(element))
       }
    });
    
});

function getMarkap(word){
    return `<li>${word}</li>`
}