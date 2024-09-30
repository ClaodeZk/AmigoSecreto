let amigos = []

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    if(nome.value == ''){
        alert('Por favor informe um nome válido.'); 
        return;
    }

    if(amigos.includes(nome.value)){
        alert('Nome já foi incluso, favor digitar outro.');
        return;    
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.value);
    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }

    nome.value = '';

    atualizarLista();
    atualizarSorteio();
}
function sortear(){
    if(amigos.length < 4){
       alert('Adicione no mínimo 4 pessoas para realizar o sorteio.');
       return; 
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';                  
        } else {
            sorteio.innerHTML =sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';      
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = "EXCLUIR  " + amigos[i];
       
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        lista.appendChild(paragrafo);
    }
}



function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}