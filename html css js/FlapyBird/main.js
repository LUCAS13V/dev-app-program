const cnv = document.getElementById("cv");
const ctx = cnv.getContext("2d");
const telas = {}


const img =new Image()
img.src="sprites.png"

const menu_inicio = {
    img_x: 133,
    img_y: 0,
    img_largura: 175,
    img_altura: 151,
    cnv_x: (cnv.width-175)/2,
    cnv_y: (cnv.height-151)/2,
    cnv_largura: 175,
    cnv_altura: 151,
    desenha(){
        ctx.drawImage(
            img, 
            menu_inicio.img_x,
            menu_inicio.img_y,
            menu_inicio.img_largura,
            menu_inicio.img_altura, 
            menu_inicio.cnv_x,
            menu_inicio.cnv_y, 
            menu_inicio.cnv_largura,
            menu_inicio.cnv_altura);
    },
    update(){},
    desenha(){
        fundo.desenha();
        chao.desenha();
        globais.flapy_bird.desenha();
    },
    update(){
        flapy_bird.update();
    },
    click(){
        flapy_bird.pula();
    }
}
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




function game(){
    //start
    fundo.desenha()
    chao.desenha()
    //fim
}
game();


//console.log(`altura: ${cnv.width},\nlargura: ${cnv.height},` )