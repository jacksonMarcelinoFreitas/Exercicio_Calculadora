function tabuada(){
    //Pegando elementos 
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //Se não preenchido
    if(num.value.length == 0){
        window.alert('Digite um número')
    }
    else{
        let n = Number(num.value) 
        tab.innerHTML = '' //Para zerar o select a cada mova tabuada!
        for(let cont = 1; cont <=10; cont++){
            let item = document.createElement('option') //criação dinâmica de option com laço
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)

        }
    }
}