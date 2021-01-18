function contar() {
    var txtinicio = window.document.querySelector("input#inicio")
    var txtfim = window.document.querySelector("input#fim")
    var txtpasso = window.document.querySelector("input#passo")
    var resp = window.document.querySelector("div#resp")

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)


    if (inicio < fim) {
        if (passo == 0 || (inicio == fim)) {
            alert("[ERRO!] Verifique os dados e tente novamente! ")

        } else {
            while (inicio <= fim) {

                if (inicio == fim) {
                    resp.innerHTML += `${inicio} -> Fim!`
                } else {
                    resp.innerHTML += `${inicio} -> `

                }

                inicio += passo
            }

        }

    } else {

        if (passo == 0 || (inicio == fim)) {
            alert("[ERRO!] Verifique os dados e tente novamente! ")

        } else {
            while (inicio >= fim) {

                if (inicio == fim) {
                    resp.innerHTML += `${inicio} -> Fim!`
                } else {
                    resp.innerHTML += `${inicio} -> `

                }

                inicio -= passo
            }

        }
    }



}