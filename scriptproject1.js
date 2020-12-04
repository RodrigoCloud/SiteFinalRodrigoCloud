function msg(){
    let InputNome = document.querySelector('#Nome')

    let SectionSaudacao = document.querySelector('#Saudacao')

    SectionSaudacao.innerHTML="";

    let div = document.createElement('div')

    let msg2 = ("Seja Bem Vindo ")

    let texto = document.createTextNode(msg2 + InputNome.value)

    div.appendChild(texto)
    
    document.body.appendChild(div)

    SectionSaudacao.appendChild(div)
}
    



