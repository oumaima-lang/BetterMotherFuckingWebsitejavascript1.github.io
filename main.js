
var pyramide;
console.log('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?');
pyramide = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?", "");
   
 for (var i = 1; i <= pyramide; i++) 
 {
    for( var j=1; j<= i; j++)
    {
       console.log('#'); 
    }
    console.log('\n');
 }



