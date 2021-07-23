function selecionar() {
}

function enviarMensagem() {
    const numero = "5512996421592";
    const pedido = "Olá, gostaria de fazer o pedido:\n";
    const prato = "- Prato: Frango Yin Yang\n";
    const bebida = "- Bebida: Coquinha Gelada\n";
    const sobremesa = "- Sobramesa: Pudim\n";
    const total = "Total: R$ 27.70";

    const mensagem = pedido + prato + bebida + sobremesa + total;

    open("https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem));
}