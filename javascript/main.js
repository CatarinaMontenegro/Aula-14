function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.querySelector('input#txtano')
    const res = document.querySelector('div#res')
   
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`ERRO! Verifique os dados e tente novamente!`)
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        var gênero = 'gênero'
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            document.body.style.background = 'rgb(68, 138, 230)'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else {
            gênero = 'Mulher'
            document.body.style.background = 'pink'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}