
function verificar () { 

    let txt1 = document.getElementById("Number") 

    if (txt1.value.length === 0) { 
        window.alert('Ero verifique os Dados e tente Novamente')
    } else { 
        txt1 = Number(); 

        if (Number % 2 === 0) {  
            console.log(`O Numero ${txt1} È par`) 
             } else { 
                console.log(`O Numero ${txt1} é Impar`)
             }
        }
    }