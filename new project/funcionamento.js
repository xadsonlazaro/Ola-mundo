
function verificar () { 
    let txt1 = document.getElementById("txt1") 
    let res = document.getElementById("res")  

    if (txt1.value.length === 0) { 
        let name = window.prompt(`Ola qual seu nome?`) 
        window.alert(` Por favor ${name} Verifique os Dados e Tente Novamente!`)
    } else {      
        let n = Number(txt1.value); 
        
        if (n % 2 === 0) { 
            res.innerHTML = `O Numero ${n} é um numero Par`
             } else { 
                res.innerHTML = `O Numero ${n} È um numero impar`
        }
         
    }
 }

 function Conversar () {  

    let nome = window.prompt(` Ohh Qual seu nome?`) 
    window.alert(`Olá ${nome} Prazer conhecer voce. meu nome é: Xadson Lázaro..`) 

    let question = window.confirm(`${nome} Voce Está gostando do site?`) 

    if (question === true) { 
        window.alert(`Que bom que esta Gostando ${nome} fiz com muito Carrinho`)  

        let questions = window.prompt(` ${nome} Neste site uque pode ser melhorado? Fica a vontade!`) 

        window.confirm(`Sim boa observação: melhorar mais O ${questions} seria muito bom. ${nome} Obrigado pela opinião..`) 

        window.alert(`Sim sei que voce pode estar se perguntando uque isso vai somar na minha vida.. sim ${nome} voce pode sei la dar prá sua finha(a) ou irmão (a) isso vai ajudar muito. então clona ele e coloca prá os Mais novos Brincarem ai em casa. alem disso voce pode ate melhorar ele vai ${nome}`)

         } else { 
            if (question === false) { 
                window.alert(` Ohh Por essa Não esperava ${nome} fico feliz em saber que Deixou sua humilde Opinião`) 

                let question2 = window.prompt(`Mé desculpa ${nome} Gostaria de Saber onde posso dar uma melhorada!`) 

                window.confirm(`Haa Nisso ${question2} Sim boa observação ${nome} Vou ver se dou uma melhorada.... (Obrigado)`)
            }
    }
    window.console("kjhfjkd")
  }