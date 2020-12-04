function calculoidade(){
    let ano_de_nascimento = prompt('Digite o seu ano de nascimento')
    let ano_atual = '2020'
    ano_atual = parseInt(ano_atual)
    ano_de_nascimento = parseInt(ano_de_nascimento)
    let idade = ano_atual - ano_de_nascimento
    let msg = 'Sua Idade é '
    alert(msg+idade)
}