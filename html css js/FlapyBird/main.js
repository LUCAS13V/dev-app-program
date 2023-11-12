const cnv = document.getElementById("cv");
const ctx = cnv.getContext("2d");

console.log(`altura: ${cnv.width},\nlargura: ${cnv.height},` )

//obj da cena 

    //src da img
    const img =new Image();
    img.src="sprites.png";
    //player
const flapy_bird = {
    //imagem
    img_x: 0,
    img_y: 0,
    img_largura: 34,
    img_altura: 24,
    cnv_x: 50,
    cnv_y: 50,
    cnv_largura: 34,
    cnv_altura: 24,
    //movimento
    volocidade: 0,
    gravidade: 0.25,
    update(){
        flapy_bird.volocidade = flapy_bird.volocidade+flapy_bird.gravidade;
        flapy_bird.cnv_y+=flapy_bird.volocidade;
        
    },
    desenha(){
        ctx.drawImage(img, 
            flapy_bird.img_x, 
            flapy_bird.img_y, 
            flapy_bird.img_largura, 
            flapy_bird.img_altura, 
            flapy_bird.cnv_x, 
            flapy_bird.cnv_y, 
            flapy_bird.cnv_largura, 
            flapy_bird.cnv_altura);
    }
}
    //chao 
const chao = {
    img_x: 0,
    img_y: 610,
    img_largura: 224,
    img_altura: 113,
    cnv_x: 0,
    cnv_y: cnv.height-112, 
    cnv_largura: 224,
    cnv_altura: 113,
    desenha(){
        ctx.drawImage(img, 
            chao.img_x, 
            chao.img_y, 
            chao.img_largura, 
            chao.img_altura, 
            chao.cnv_x, 
            chao.cnv_y, 
            chao.cnv_largura, 
            chao.cnv_altura
            );
        ctx.drawImage(img, 
            chao.img_x, 
            chao.img_y, 
            chao.img_largura, 
            chao.img_altura,
            (chao.cnv_x+chao.cnv_largura), 
            chao.cnv_y, 
            chao.cnv_largura, 
            chao.cnv_altura);
    }
}
   
    //img de fundo
const fundo = {
    img_x: 390,
    img_y: 4,
    img_largura: 276,
    img_altura: 200,
    cnv_x: 0,
    cnv_y: cnv.height-200,
    cnv_largura: 276,
    cnv_altura: 200,
    desenha(){
        //ceu fundo
        ctx.fillStyle="rgb(90, 170, 225)";
        ctx.fillRect(0, 0, cnv.width, cnv.height)
        ctx.drawImage(img, fundo.img_x, fundo.img_y, fundo.img_largura, fundo.img_altura, fundo.cnv_x, fundo.cnv_y, fundo.cnv_largura, fundo.cnv_altura);
        //segunda parte chaop
        ctx.drawImage(img, fundo.img_x, fundo.img_y, fundo.img_largura, fundo.img_altura, (fundo.cnv_x+fundo.cnv_largura), fundo.cnv_y, fundo.cnv_largura, fundo.cnv_altura);

    }
}
function game(){
    //start

    //desenhar na tela
    fundo.desenha();
    chao.desenha();
    flapy_bird.desenha();
    flapy_bird.update();
    //console.log(flapy_bird.cnv_y);
    
    //fim
    requestAnimationFrame(game);
}

game();