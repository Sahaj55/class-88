
var canvas=new fabric.Canvas('myCanvas');
bw=30;
bh=30;
px=10;
py=10;


var playerobject="";
function player (){
fabric.Image.fromURL("player.png",function (Img)
{
playerobject=Img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
top:py,
left:px
});
canvas.add(playerobject);
});
}

function getimage(get_image){
    fabric.Image.fromURL(get_image,function (Img)
    {
    blockobject=Img;
    blockobject.scaleToWidth(bw);
    blockobject.scaleToHeight(bh);
    blockobject.set({
    top:py,
    left:px
    });
    canvas.add(blockobject);
    });
    }


    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
    key=e.keyCode;
    if(e.shiftKey==true && key=='80'){
    bw=bw+10;
    bh=bh+10;
    document.getElementById("current_width").innerHTML=bw;
    document.getElementById("current_height").innerHTML=bh;
    }
    if(e.shiftKey==true && key=='77'){
        bw=bw-10;
        bh=bh-10;
        document.getElementById("current_width").innerHTML=bw;
        document.getElementById("current_height").innerHTML=bh;
        }
    if(key=='38'){
    up();
    console.log("up")
    }
    if(key=='40'){
        down();
        console.log("down")
        
        }
    
        if(key=='37'){
            left();
            console.log("left")
            
            }
    
            if(key=='39'){
                right();
                console.log("right")
                
                }

                if(key=='87'){
                    getimage('wall.jpg');
                    console.log("w")
                    
                    }

                    if(key=='71'){
                        getimage('ground.png');
                        console.log("g")
                        
                        }
                        if(key=='76'){
                            getimage('light_green.png');
                            console.log("l")
                            
                            }
                            if(key=='84'){
                                getimage('trunk.jpg');
                                console.log("t")
                                
                                }
                                if(key=='82'){
                                    getimage('roof.jpg');
                                    console.log("r")
                                    
                                    }
                                    if(key=='89'){
                                        getimage('yellow_wall.png');
                                        console.log("y")
                                        
                                        }
                                        if(key=='68'){
                                            getimage('dark_green.png');
                                            console.log("d")
                                            
                                            }
                                            if(key=='85'){
                                                getimage('unique.png');
                                                console.log("u")
                                                
                                                }

                                                if(key=='67'){
                                                    getimage('cloud.jpg');
                                                    console.log("c")
                                                    
                                                    }

    }

    function up(){
if(py>=0){

    py=py-bh;
console.log("block height"+bh);
console.log("when up arrow key is pressed,x="+px+"y="+py);
canvas.remove(playerobject);
player ();
}
    }
    
    function down(){
        if(py<=500){
        
            py=py+bh;
        console.log("block height"+bh);
        console.log("when down arrow key is pressed,x="+px+"y="+py);
        canvas.remove(playerobject);
        player ();
        }
            }
    
            function left(){
                if(px>0){
                
                    px=px-bw;
                console.log("block weigth"+bw);
                console.log("when left arrow key is pressed,x="+px+"y="+py);
                canvas.remove(playerobject);
                player ();
                }
                    }
    
    
                    function right(){
                        if(px<=850){
                        
                            px=px+bw;
                        console.log("block weigth"+bw);
                        console.log("when right arrow key is pressed,x="+px+"y="+py);
                        canvas.remove(playerobject);
                        player ();
                        }
                            }
            
            
            
            
            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
    





















