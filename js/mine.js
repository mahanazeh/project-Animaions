$("section").animate({width: "100%" ,} , 1000);


$("section").animate({height: "100vh"} , 2000 , function(){
      
    $("h1").fadeIn(1000 , function(){
          
                                 $(".item1").slideDown(1000, function(){
               
                                                                      $(".item2").slideDown(1000, function(){
                                                                                                 $(".item3").slideDown(1000) })
})
})
})





