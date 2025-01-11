    var SetaDireita = window.document.getElementById("SetaDireita")
    var leonardo = window.document.getElementById("Leonardo")
    var Samantha = window.document.getElementById("Samantha")
    var Bruna = window.document.getElementById("Bruna")
    var SetaEsquerda = window.document.getElementById("SetaEsquerda")

    function RolarParaDireita() {
        leonardo.style ="display:none"
        Bruna.style ="display:flex"
        SetaDireita.style = "display:none"
        SetaEsquerda.style = "display:flex; margin-top:50px"
    }

    function RolarParaEsquerda () {
        leonardo.style = "display: flex"
        Bruna.style = "display: none"
        SetaDireita.style = "display:flex; margin-top:50px"
        SetaEsquerda.style = "display:none"
    }