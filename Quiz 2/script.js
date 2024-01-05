var answer = $(".answer")
var firstAnswer = "Führungsaufgaben, Führungsorganisation, Führungstechniken und -mittel"
var secondAnswer = "Anwendung von Planungs- und Steuerungsmethoden"
var thirdAnswer = "Detaillierte Planung zu Projektbeginn"
var fourAnswer = "Agiles Projektmanagement"
var fiveAnswer = "Iterative und flexible Planung während des Projekts"
var sixAnswer = "Kombination verschiedener Methoden"
var sevenAnswer = "Wasserfall-Modell"
var eightAnswer = "Agiles Projektmanagement"
var nineAnswer = "Während des Projekts in kurzen Arbeitsphasen"
var tenAnswer = "Natur des Projekts und Anforderungen"
var failCounter =0
$(".first").click(function(){
    if(this.outerText == firstAnswer){
        $('.first').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})

$(".second").click(function(){
    if(this.outerText == secondAnswer){
        $('.second').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})

$(".third").click(function(){
    if(this.outerText == thirdAnswer){
        $('.third').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
    
})
$(".four").click(function(){
    if(this.outerText == fourAnswer){
        $('.four').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".five").click(function(){
    if(this.outerText == fiveAnswer){
        $('.five').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".six").click(function(){
    if(this.outerText == sixAnswer){
        $('.six').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".seven").click(function(){
    if(this.outerText == sevenAnswer){
        $('.seven').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".eight").click(function(){
    if(this.outerText == eightAnswer){
        $('.eight').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".nine").click(function(){
    if(this.outerText == nineAnswer){
        $('.nine').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})
$(".ten").click(function(){
    if(this.outerText == tenAnswer){
        $('.ten').css("background-color","rgb(230,55,70)")
        $(this).css("background-color","rgb(50,150,50)")
    }
    else{
        $(this).css("background-color","rgb(230,55,70)")
        failCounter++
    }
    $("#failures").text(`Du hast gemacht ${failCounter} Ausfälle.`)
})




