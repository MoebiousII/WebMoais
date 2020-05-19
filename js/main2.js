//<![CDATA[ 
    $(window).load(function(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var $canvas=$("#canvas");
    var canvasOffset=$canvas.offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;

    var image1=new Image();
    image1.src = "minigamecont/base.png";
    var image2=new Image();
    image2.src = "minigamecont/cabezamoai.png";
    var image3=new Image();
    image3.src = "minigamecont/faldita.png";
    var image4=new Image();
    image4.src = "minigamecont/camisa.png";
    var image5=new Image();
    image5.src = "minigamecont/stax.png";
    var image6=new Image();
    image6.src = "minigamecont/vadexby.png";
    var image7=new Image();
    image7.src = "minigamecont/vegeta.png";
    var image8=new Image();
    image8.src = "minigamecont/campera1.png";
    var image9=new Image();
    image9.src = "minigamecont/casco1.png";
    var image10=new Image();
    image10.src = "minigamecont/zunga1.png";
    var image11=new Image();
    image11.src = "minigamecont/exp1.png";
    var image12=new Image();
    image12.src = "minigamecont/exp2.png";
    var image13=new Image();
    image13.src = "minigamecont/exp3.png";
    var image14=new Image();
    image14.src = "minigamecont/exp4.png";
    var image15=new Image();
    image15.src = "minigamecont/exp5.png";
    var image16=new Image();
    image16.src = "minigamecont/exp6.png";
    var image17=new Image();
    image17.src = "minigamecont/zunga2.png";
    var image18=new Image();
    image18.src = "minigamecont/rage1.png";
    var image19=new Image();
    image19.src = "minigamecont/troll.png";
    var image20=new Image();
    image20.src = "minigamecont/guat.png";
     var image21=new Image();
    image21.src = "minigamecont/meh.png";
    var image22=new Image();
    image22.src = "minigamecont/kaguai.png";
    var image23=new Image();
    image23.src = "minigamecont/guat.png";
    var image24=new Image();
    image24.src = "minigamecont/exp6.png";
    var image25=new Image();
    image25.src = "minigamecont/exp7.png";
    var image26=new Image();
    image26.src = "minigamecont/normal.png";
    var image27=new Image();
    image27.src = "minigamecont/ojo1.png";
    var image28=new Image();
    image28.src = "minigamecont/ojo9.png";
    var image29=new Image();
    image29.src = "minigamecont/ojo2.png";
    var image30=new Image();
    image30.src = "minigamecont/ojo3.png";
    var image31=new Image();
    image31.src = "minigamecont/ojo4.png";
    var image32=new Image();
    image32.src = "minigamecont/ojo5.png";
    var image33=new Image();
    image33.src = "minigamecont/ojo6.png";
    var image34=new Image();
    image34.src = "minigamecont/ojo7.png";
    var image35=new Image();
    image35.src = "minigamecont/panta1.png";
    var image36=new Image();
    image36.src = "minigamecont/panta2.png";
    var image37=new Image();
    image37.src = "minigamecont/panta3.png";
    var image38=new Image();
    image38.src = "minigamecont/panta4.png";
    var image39=new Image();
    image39.src = "minigamecont/traje2.png";
    var image40=new Image();
    image40.src = "minigamecont/calza1.png";
    var image41=new Image();
    image41.src = "minigamecont/bigote.png";
    var image42=new Image();
    image42.src = "minigamecont/crazy.png";
    var image43=new Image();
    image43.src = "minigamecont/beso.png";
    var image44=new Image();
    image44.src = "minigamecont/casco2.png";
    var image45=new Image();
    image45.src = "minigamecont/casco3.png";
    var image46=new Image();
    image46.src = "minigamecont/pelo1.png";
    var image47=new Image();
    image47.src = "minigamecont/pelo2.png";
    var image48=new Image();
    image48.src = "minigamecont/pelo3.png";
    var image49=new Image();
    image49.src = "minigamecont/pelo4.png";
    var image50=new Image();
    image50.src = "minigamecont/pelo5.png";
    var image51=new Image();
    image51.src = "minigamecont/pelo6.png";
    var image52=new Image();
    image52.src = "minigamecont/pelo7.png";
    var image53=new Image();
    image53.src = "minigamecont/campera2.png";
    var image54=new Image();
    image54.src = "minigamecont/buzo1.png";
    var image55=new Image();
    image55.src = "minigamecont/buzo2.png";
    var image56=new Image();
    image56.src = "minigamecont/buzo3.png";
    var image57=new Image();
    image57.src = "minigamecont/corse%201.png";
    var image58=new Image();
    image58.src = "minigamecont/muscunaranja.png";
    var image59=new Image();
    image59.src = "minigamecont/remeranegra.png";
    var image60=new Image();
    image60.src = "minigamecont/remeraroja.png";
    var image61=new Image();
    image61.src = "minigamecont/remerazombie.png";
    var image62=new Image();
    image62.src = "minigamecont/remerazul.png";
    var image63=new Image();
    image63.src = "minigamecont/sosten1.png";
    var image64=new Image();
    image64.src = "minigamecont/sosten2.png";
    var image65=new Image();
    image65.src = "minigamecont/sosten3.png";
    var image66=new Image();
    image66.src = "minigamecont/traje.png";
    var image67=new Image();
    image67.src = "minigamecont/swag.png";
    var image68=new Image();
    image68.src = "minigamecont/botas1.png";
    var image69=new Image();
    image69.src = "minigamecont/botas2.png";
    var image70=new Image();
    image70.src = "minigamecont/guantes1.png";
    var image71=new Image();
    image71.src = "minigamecont/zapa1.png";
          
        
    var $house=$("#house");
    var $house2=$("#house2");
    var $house3=$("#house3");
    var $house4=$("#house4");
    var $house5=$("#house5");
    var $house6=$("#house6");
    var $house7=$("#house7");
    var $house8=$("#house8");
    var $house9=$("#house9");
    var $house10=$("#house10");
    var $house11=$("#house11");
    var $house12=$("#house12");
    var $house13=$("#house13");
    var $house14=$("#house14");
    var $house15=$("#house15");
    var $house16=$("#house16");
    var $house17=$("#house17");
    var $house18=$("#house18");
    var $house19=$("#house19");
    var $house20=$("#house20");
    var $house21=$("#house21");
    var $house22=$("#house22");
    var $house23=$("#house23");
    var $house24=$("#house24");
    var $house25=$("#house25");
    var $house26=$("#house26");
    var $house27=$("#house27");
    var $house28=$("#house28");
    var $house29=$("#house29");
    var $house30=$("#house30");
    var $house31=$("#house31");
    var $house32=$("#house32");
    var $house33=$("#house33");
    var $house34=$("#house34");
    var $house35=$("#house35");
    var $house36=$("#house36");
    var $house37=$("#house37");
    var $house38=$("#house38");
    var $house39=$("#house39");
    var $house40=$("#house40");
    var $house41=$("#house41");
    var $house42=$("#house42");
    var $house43=$("#house43");
    var $house44=$("#house44");
    var $house45=$("#house45");
    var $house46=$("#house46");
    var $house47=$("#house47");
    var $house48=$("#house48");
    var $house49=$("#house49");
    var $house50=$("#house50");
    var $house51=$("#house51");
    var $house52=$("#house52");
    var $house53=$("#house53");
    var $house54=$("#house54");
    var $house55=$("#house55");
    var $house56=$("#house56");
    var $house57=$("#house57");
    var $house58=$("#house58");
    var $house59=$("#house59");
    var $house60=$("#house60");
    var $house61=$("#house61");
    var $house62=$("#house62");
    var $house63=$("#house63");
    var $house64=$("#house64");
    var $house65=$("#house65");
    var $house66=$("#house66");
    var $house67=$("#house67");
    var $house68=$("#house68");
    var $house69=$("#house69");
    var $house70=$("#house70");
    var $house71=$("#house71");
    var $canvas=$("#canvas");

    $house.draggable({
    helper:'clone',
    });
    $house2.draggable({
    helper:'clone',
    });
    $house3.draggable({
    helper:'clone',
    });
    $house4.draggable({
    helper:'clone',
    });
    $house5.draggable({
    helper:'clone',
    });
    $house6.draggable({
    helper:'clone',
    });
    $house7.draggable({
    helper:'clone',
    });
    $house8.draggable({
    helper:'clone',
    });
    $house9.draggable({
    helper:'clone',
    });
    $house10.draggable({
    helper:'clone',
    });
    $house11.draggable({
    helper:'clone',
    });
    $house12.draggable({
    helper:'clone',
    });
    $house13.draggable({
    helper:'clone',
    });
    $house14.draggable({
    helper:'clone',
    });
    $house15.draggable({
    helper:'clone',
    });
    $house16.draggable({
    helper:'clone',
    });
    $house17.draggable({
    helper:'clone',
    });
    $house18.draggable({
    helper:'clone',
    });
    $house19.draggable({
    helper:'clone',
    });
    $house20.draggable({
    helper:'clone',
    });
    $house21.draggable({
    helper:'clone',
    });
    $house22.draggable({
    helper:'clone',
    });
     $house23.draggable({
    helper:'clone',
    });
    $house24.draggable({
    helper:'clone',
    });
    $house23.draggable({
    helper:'clone',
    });
    $house24.draggable({
    helper:'clone',
    });
    $house25.draggable({
    helper:'clone',
    });
    $house26.draggable({
    helper:'clone',
    });
    $house27.draggable({
    helper:'clone',
    });
    $house28.draggable({
    helper:'clone',
    });
    $house29.draggable({
    helper:'clone',
    });
    $house30.draggable({
    helper:'clone',
    });
    $house31.draggable({
    helper:'clone',
    });
     $house32.draggable({
    helper:'clone',
    });
    $house32.draggable({
    helper:'clone',
    });
    $house33.draggable({
    helper:'clone',
    });
    $house34.draggable({
    helper:'clone',
    });
    $house35.draggable({
    helper:'clone',
    });
    $house36.draggable({
    helper:'clone',
    });
    $house37.draggable({
    helper:'clone',
    });
    $house38.draggable({
    helper:'clone',
    });
    $house39.draggable({
    helper:'clone',
    });
    $house40.draggable({
    helper:'clone',
    });
    $house41.draggable({
    helper:'clone',
    });
     $house42.draggable({
    helper:'clone',
    });
    $house43.draggable({
    helper:'clone',
    });
    $house44.draggable({
    helper:'clone',
    });
    $house45.draggable({
    helper:'clone',
    });
    $house46.draggable({
    helper:'clone',
    });
    $house47.draggable({
    helper:'clone',
    });
    $house48.draggable({
    helper:'clone',
    });
    $house49.draggable({
    helper:'clone',
    });
    $house50.draggable({
    helper:'clone',
    });
    $house51.draggable({
    helper:'clone',
    });
    $house52.draggable({
    helper:'clone',
    });
    $house53.draggable({
    helper:'clone',
    });
     $house54.draggable({
    helper:'clone',
    });
    $house55.draggable({
    helper:'clone',
    });
    $house56.draggable({
    helper:'clone',
    });
    $house57.draggable({
    helper:'clone',
    });
    $house58.draggable({
    helper:'clone',
    });
    $house59.draggable({
    helper:'clone',
    });
    $house60.draggable({
    helper:'clone',
    });
    $house61.draggable({
    helper:'clone',
    });
    $house62.draggable({
    helper:'clone',
    });
    $house63.draggable({
    helper:'clone',
    });
    $house64.draggable({
    helper:'clone',
    });
     $house65.draggable({
    helper:'clone',
    });
    $house66.draggable({
    helper:'clone',
    });
    $house67.draggable({
    helper:'clone',
    });
    $house68.draggable({
    helper:'clone',
    });
    $house69.draggable({
    helper:'clone',
    });
    $house70.draggable({
    helper:'clone',
    });
    $house71.draggable({
    helper:'clone',
    });
   
        
// set the data payload
    $house.data("image",image1); // key-value pair
    $house2.data("image",image2);
    $house3.data("image",image3);
    $house4.data("image",image4);
    $house5.data("image",image5);
    $house6.data("image",image6);
    $house7.data("image",image7);
    $house8.data("image",image8);
    $house9.data("image",image9);
    $house10.data("image",image10);
    $house11.data("image",image11);
    $house12.data("image",image12);
    $house13.data("image",image13);
    $house14.data("image",image14);
    $house15.data("image",image15);
    $house16.data("image",image16);
    $house17.data("image",image17);
    $house18.data("image",image18);
    $house19.data("image",image19);
    $house20.data("image",image20);
    $house21.data("image",image21);
    $house22.data("image",image22);
    $house23.data("image",image23);
    $house24.data("image",image24);
    $house25.data("image",image25);
    $house26.data("image",image26);
    $house27.data("image",image27);
    $house28.data("image",image28);
    $house29.data("image",image29);
    $house30.data("image",image30);
    $house31.data("image",image31);
    $house32.data("image",image32);
    $house33.data("image",image33);
    $house34.data("image",image34);
    $house35.data("image",image35);
    $house36.data("image",image36);
    $house37.data("image",image37);
    $house38.data("image",image38);
    $house39.data("image",image39);
    $house40.data("image",image40);
    $house41.data("image",image41);
    $house42.data("image",image42);
    $house43.data("image",image43);
    $house44.data("image",image44);
    $house45.data("image",image45);
    $house46.data("image",image46);
    $house47.data("image",image47);
    $house48.data("image",image48);
    $house49.data("image",image49);
    $house50.data("image",image50);
    $house51.data("image",image51);
    $house52.data("image",image52);
    $house53.data("image",image53);
    $house54.data("image",image54);
    $house55.data("image",image55);
    $house56.data("image",image56);
    $house57.data("image",image57);
    $house58.data("image",image58);
    $house59.data("image",image59);
    $house60.data("image",image60);
    $house61.data("image",image61);
    $house62.data("image",image62);
    $house63.data("image",image63);
    $house64.data("image",image64);
    $house65.data("image",image65);
    $house66.data("image",image66);
    $house67.data("image",image67);
    $house68.data("image",image68);
    $house69.data("image",image69);
    $house70.data("image",image70);
    $house71.data("image",image71);
      
        
    $canvas.droppable({
    drop:dragDrop,
    });
    
    var fondo=new Image();
    fondo.src= "minigamecont/fondocanvas.png";
    fondo.onload = function () {
    	ctx.drawImage(fondo, 0, 0,320,480);
    };

    function dragDrop(e,ui){
    var element=ui.draggable;
    var data=element.data("url");
    var x=parseInt(ui.offset.left-offsetX);
    var y=parseInt(ui.offset.top-offsetY);
    ctx.drawImage(element.data("image"),x-1,y);
    };
    
});//]]>  
function saveImage(){
 		var canvas = document.getElementById("canvas");
		document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
};
function clearcanvas1()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

$(function() {
    $( "#tabs" ).tabs();
  });