$(function(){

    $('#fullpage').fullpage({
        anchors: ['section1','section2','section3','section5'],
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#C8F5BC', '#E5FFC4', '#E5E9C0', '#F5EBBC'],
        slidesNavigation:true,
        slidesNavPosition:'top',
        slideSelection:'.slide',
        loopHorizontal: false,
        afterLoad: function(anchorLink, index){
            console.log("current section number is " + index);
        },
        loopBottom:'true',
        loopTop:'true',
        navigationTooltips:['Main Page','Brief History','Helpful videos','Console and their release date']
        
	});

    $(".tab_title li").click(function() {
        var idx = $(this).index();
        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();
    })

    $('button').hover(function(){
        $(this).css('color','Gray');
    }, function() {
        $(this).css('color','White');
    });

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

        

    

});


