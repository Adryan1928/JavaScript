function verificar() {
    const ano = new Date().getFullYear()
    var fano = window.document.getElementById('txtano').value
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.length == 0 || fano > ano) {
        alert('Verifique os dados e tente novamente')
        return
    }

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano)
    var genero = ''

    if (fsex[0].checked) {
        genero = 'homem'
        if (idade >=0 && idade < 10)
            img.setAttribute('src', `imgs/${genero}-crianca.jpg`)
        else if (idade < 22)
            img.setAttribute('src', `imgs/${genero}-jovem.jpg`)
        else if (idade < 50)
            img.setAttribute('src', `imgs/${genero}-adulto.jpg`)
        else
            img.setAttribute('src', `imgs/${genero}-idoso.jpg`)
    } else {
        genero = 'mulher'
        if (idade >=0 && idade < 10)
            img.setAttribute('src', `imgs/${genero}-crianca.jpg`)
        else if (idade < 22)
            img.setAttribute('src', `imgs/${genero}-jovem.jpg`)
        else if (idade < 50)
            img.setAttribute('src', `imgs/${genero}-adulta.jpg`)
        else
            img.setAttribute('src', `imgs/${genero}-idosa.jpg`)
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    res.appendChild(img)
}