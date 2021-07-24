let prato_nome;
let prato_preco;

let bebida_nome;
let bebida_preco;

let sobremesa_nome;
let sobremesa_preco;

function atualizarBotao() {
    const botao_desabilitado = document.querySelector(".desabilitado");
    const botao_habilitado = document.querySelector(".habilitado");

    if ( prato_nome !== undefined && bebida_nome !== undefined && sobremesa_nome !== undefined ) {
        botao_desabilitado.classList.add("oculto");
        botao_habilitado.classList.remove("oculto");
    }
}

function selecionarPrato(opcao) {
    const selecionado = document.querySelector(".pratos .selecionado");
    let check = document.querySelector(".pratos .selecionado .check");

    if ( selecionado !== null )
    {
        selecionado.classList.remove("selecionado");
        check.classList.add("oculto");
    }
    
    opcao.classList.add("selecionado");
    check = document.querySelector(".pratos .selecionado .check");
    check.classList.remove("oculto");

    const nome = document.querySelector(".pratos .selecionado .nome");
    const preco = document.querySelector(".pratos .selecionado .preco");

    prato_nome = nome.innerHTML;
    prato_preco = Number(preco.innerHTML);

    atualizarBotao();
}

function selecionarBebida(opcao) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    let check = document.querySelector(".bebidas .selecionado .check");

    if ( selecionado !== null )
    {
        selecionado.classList.remove("selecionado");
        check.classList.add("oculto");
    }
    
    opcao.classList.add("selecionado");
    check = document.querySelector(".bebidas .selecionado .check");
    check.classList.remove("oculto");

    const nome = document.querySelector(".bebidas .selecionado .nome");
    const preco = document.querySelector(".bebidas .selecionado .preco");

    bebida_nome = nome.innerHTML;
    bebida_preco = Number(preco.innerHTML);

    atualizarBotao();
}

function selecionarSobremesa(opcao) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    let check = document.querySelector(".sobremesas .selecionado .check");

    if ( selecionado !== null )
    {
        selecionado.classList.remove("selecionado");
        check.classList.add("oculto");
    }
    
    opcao.classList.add("selecionado");
    check = document.querySelector(".sobremesas .selecionado .check");
    check.classList.remove("oculto");

    const nome = document.querySelector(".sobremesas .selecionado .nome");
    const preco = document.querySelector(".sobremesas .selecionado .preco");

    sobremesa_nome = nome.innerHTML;
    sobremesa_preco = Number(preco.innerHTML);

    atualizarBotao();
}

function enviarMensagem() {
    const preco = prato_preco + bebida_preco + sobremesa_preco;
    const nome = prompt("Digite seu nome:");
    const endereco = prompt("Digite seu endereço:");

    const numero = "5512996421592";
    const pedido = "Olá, gostaria de fazer o pedido:\n";
    const prato = "- Prato: " + prato_nome;
    const bebida = "\n- Bebida: " + bebida_nome;
    const sobremesa = "\n- Sobremesa: " + sobremesa_nome;
    const total = "\nTotal: R$ " + preco.toFixed(2);
    const nome_mensagem = "\n\nNome: " + nome;
    const endereco_mensagem = "\nEndereço: " + endereco;

    const mensagem = pedido + prato + bebida + sobremesa + total + nome_mensagem + endereco_mensagem;

    open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem));
}