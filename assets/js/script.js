const areaDeTexto = document.getElementById('areaTexto');

function sortear(){

    if(!areaDeTexto.value){
        alert('Preencha o campo obrigatório!');
    } else {
        const itensArr = areaDeTexto.value.split(',');
        const numeroSorteado = Math.floor(Math.random() * itensArr.length);
        const intemSorteado = itensArr[numeroSorteado];
        alert(`O número sorteado é: ${intemSorteado.trim()}`);
    }
};