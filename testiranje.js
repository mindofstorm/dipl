
//tooltip za ekrane manje od 768px
function Ekran(x) {
    if (x.matches) {
        $('[data-toggle="tooltip"]').tooltip({
            placement: 'left'
        });
    }
    // else{
    //
    // }
}

var x = window.matchMedia("(max-width: 768px)");
Ekran(x);
x.addListener(Ekran);


<script>
$('.mainb').click(function(){
    if($(this).hasClass('act')){
        $(this).removeClass('act')
    } else {
        $(this).addClass('act')
    }
});
</script>