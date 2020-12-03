  
    //Preloader
    $(window).on("load",function(){
    $(".overlay").fadeToggle(700);
    });

    //PopUP
    $('#exampleModalCenter').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    
    //Titlu proiect + adaugare lista
    
    function getInputText(){
        var e = document.getElementById('mat');
        var opt = e.options[e.selectedIndex];
        var titlu = document.getElementById('titlu').value;
        var ul = document.getElementById("listaAdauga");
        var items = ul.getElementsByTagName("li");
        var text1 = ul.getElementsByTagName("h5");
        var text2 = ul.getElementsByTagName("h6");
        var ok = 0
        for (var i = 0; i < items.length && ok==0; i++){
            var content = text2[i].textContent;
            if(titlu == text1[i].textContent && opt.textContent == content.slice(1,content.length - 1))
                ok=1;
        }

        if(ok == 0 && titlu != "" && opt.textContent!="Alege materia"){
                $("#listaAdauga").append("<li><h5>"+titlu+"</h5><h6>("+opt.textContent+")</h6></li>");
            }
        else
            alert("Nu ai introdus bine datele sau proiectul deja exista!");
    }