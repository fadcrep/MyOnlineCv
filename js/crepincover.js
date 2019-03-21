$(function(){

    var words = [
        'un développeur web',
        'un développeur mobile',
        'un data enthousiast'

    ],
    i = 0;
    // On gère l'affichage du menu responsive pour les écrans inférieur ou égaux à medium(<992px)

    $(".navbar-responsive").toggle();

    $(".menu").click(function(){
        $(".navbar-responsive").toggle("slow");

    });

    //on gère l'affichage aléatoire des phrases du header(toutes les 3.5s)
    setInterval(function(){
        $("#word").fadeOut(function(){
            $(this).html(words[i= (i+1)% words.length]).fadeIn();
        })

    }, 3500)

    // on gère le scroll vers les différents éléments du site
    
    $(".scroll").click(function(){
        var section = $("." + this.id);
        $("html, body").animate({scrollTop: section.offset().top} , 'slow');

    })

    // On gère l'affichage des progress-bar pour les compétences

    window.sr = ScrollReveal();
    sr.reveal('.progress-bar', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })

});