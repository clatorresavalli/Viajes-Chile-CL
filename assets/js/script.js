//NavBar/

$(document).ready(function(){

    $("a").click(function(){
        var gato= this.hash
    
        $("html, body"). animate(
            {
                scrollTop: $(gato).offset().top -70
            },
            800
        )
    })
    
    })
    
    
    var nav = document.querySelector("nav");
    window.addEventListener("scroll", function() {
        if (this.window.pageYOffset >100) {
            nav.classList.add("bg-dark");
        } else {
            nav.classList.remove("bg-dark");
        }
    });    
        
    
    
    
    //Tooltip botón enviar//
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    //Alerta mensaje enviado correctamente//
    
    $("#btn-enviar").click(function(){
        alert("Tu mensaje fue enviado correctamente")
        });
    
    
    