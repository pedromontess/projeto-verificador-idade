function verificar () {
  var data = new Date()
  var ano = data.getFullYear() //ano inteiro
  var fano = document.getElementById('txtano') //fano = formulario/ ano
  var res = document.getElementById('res') //div res
  if (fano.value.length == 0 || fano.value.length > ano ) {
    window.alert ('[ERRO!] Verifique os dados e tente novamente!')
  }
  else {
    //window.alert ('tudo ok') micro validaçao
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
  } if (fsex[0].checked){
      genero = 'Homem'

    } else 
      genero = 'Mulher'    
  res.style.textAlign = 'Center' //centralizar por js
  res.innerHTML = `Detectamos que voce é ${genero} com ${idade} anos `
}