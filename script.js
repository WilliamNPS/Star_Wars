let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelector("#buttons-container buttons")
let messagecontainer = document.querySelector("#message")
let messagetexto = document.querySelector("#message p")
let secondplay;

/* Contato de jogadas */

let player1 = 0
let player2 = 0 

/* adicionar o evento de click aos boxes */
for(let i = 0 ; i<boxes.length; i++){
    //quando alguem clica na caixa
    boxes[i].addEventListener("click",function(){
        let el = verificaEL(player1,player2)
       

        //verifica se já tem x ou o    
     if(this.childNodes.length == 0){
        let cloneEl = el.cloneNode(true)
        this.appendChild(cloneEl);

        //computar jogada
        if(player1 == player2){
          player1++;
        }else{
          player2++
        }
        //checar quem venceu 
        checarvitoria()
     }
    })
}






//ve quem vai joga
function verificaEL(player1,player2){
    if(player1 == player2){
        //x
        el = x
    }else{
        el = o
            //o
    }  
    return el
}

//checar vitoria
function checarvitoria(){
    let b1 = document.querySelector("#block-1")
    let b2 = document.querySelector("#block-2")
    let b3 = document.querySelector("#block-3")
    let b4 = document.querySelector("#block-4")
    let b5 = document.querySelector("#block-5")
    let b6 = document.querySelector("#block-6")
    let b7 = document.querySelector("#block-7")
    let b8 = document.querySelector("#block-8")
    let b9 = document.querySelector("#block-9")
    //horizontal 
    if(b1.childNodes.length > 0 &&  b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;
        if (b1child == 'x' && b2child == 'x' && b3child == 'x' ){
            //x
            declararvitoria('x')
        }else if (b1child == 'o' && b2child == 'o' && b3child == 'o' ){
            // o 
            declararvitoria('o')
        }
    }


    if(b4.childNodes.length > 0 &&  b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        if (b4child == 'x' && b5child == 'x' && b6child == 'x' ){
            //x
                     declararvitoria('x')
        }else if (b4child == 'o' && b5child == 'o' && b6child == 'o' ){
            // o 
                     declararvitoria('o')
        }
    }

    
    if(b7.childNodes.length > 0 &&  b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;
        if (b7child == 'x' && b8child == 'x' && b9child == 'x' ){
            //x
                     declararvitoria('x')
        }else if (b7child == 'o' && b8child == 'o' && b9child == 'o' ){
            // o 
                     declararvitoria('o')
        }
    }

  ///vertical
  
  if(b1.childNodes.length > 0 &&  b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;
    if (b1child == 'x' && b4child == 'x' && b7child == 'x' ){
        //x
                 declararvitoria('x')
    }else if (b1child == 'o' && b4child == 'o' && b7child == 'o' ){
        // o 
                 declararvitoria('o')
    }
}


if(b2.childNodes.length > 0 &&  b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
    let b2child = b2.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b8child = b8.childNodes[0].className;
    if (b2child == 'x' && b5child == 'x' && b8child == 'x' ){
        //x
                 declararvitoria('x')
    }else if (b2child == 'o' && b5child == 'o' && b8child == 'o' ){
        // o 
                 declararvitoria('o')
    }
}

if(b3.childNodes.length > 0 &&  b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
    let b3child = b3.childNodes[0].className;
    let b6child = b6.childNodes[0].className;
    let b9child = b9.childNodes[0].className;
    if (b3child == 'x' && b6child == 'x' && b9child == 'x' ){
        //x
                 declararvitoria('x')
    }else if (b3child == 'o' && b6child == 'o' && b9child == 'o' ){
        // o 
                 declararvitoria('o')
    }
}
    

//horizontal 
if(b1.childNodes.length > 0 &&  b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
    let b1child = b1.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b9child = b9.childNodes[0].className;
    if (b1child == 'x' && b5child == 'x' && b9child == 'x' ){
        //x
                 declararvitoria('x')
    }else if (b1child == 'o' && b5child == 'o' && b9child == 'o' ){
        // o 
                 declararvitoria('o')
    }
}

if(b3.childNodes.length > 0 &&  b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
    let b3child = b3.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b7child = b7.childNodes[0].className;
    if (b3child == 'x' && b5child == 'x' && b7child == 'x' ){
        //x
                 declararvitoria('x')
    }else if (b3child == 'o' && b5child == 'o' && b7child == 'o' ){
        // o 
                 declararvitoria('o')
    }
}

//deu velha 
let counter = 0

for (let i = 0 ; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined){
        counter++;
    }
}

if (counter == 9){
    declararvitoria("Empate! <br> O proximo embate será épico!")
}


}

//limpa o jogo ,declara , o vencedor e atualiza o blacar

function declararvitoria(vitoria){
    let scoreboX = document.querySelector("#scoreboard-1")
    let scoreboO = document.querySelector("#scoreboard-2")
    let msg = ''
   if (vitoria == 'x'){
         scoreboX.textContent = parseInt(scoreboX.textContent)+1
         msg = " Darth Vader Wins <br>Você não conhece o poder do lado sombrio. "
   }else if (vitoria == 'o'){
    scoreboO.textContent = parseInt(scoreboO.textContent)+1
    msg = " Obi-Wan Wins <br>Lembre-se: a Força estará com você.  "
   }else{
     msg="Empate! <br>O proximo embate será épico!"
   }

   //exibir mensagem 

   messagetexto.innerHTML = msg;
   messagecontainer.classList.remove("hide")


   //esconder msg

   setInterval(function(){
     messagecontainer.classList.add("hide")
   },6000)
//zera as jogadas 
player1 = 0
player2 = 0
//remove x e o
let boxesToremove = document.querySelectorAll(".box div");
for (let i = 0 ; i< boxesToremove.length; i++){
    boxesToremove[i].parentNode.removeChild(boxesToremove[i]);
}


}
