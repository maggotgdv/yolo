/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      var click_empresas=0;
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         if(click_empresas==0)
         {
         	sym.play();
         	click_empresas = 1;
         }
      	else
      	{
         	sym.playReverse();
         	click_empresas = 0;
         }
      
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'contenido'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_item}", "click", function(sym, e) {
         window.location.href = "http://www.google.com.pe";

      });
      //Edge binding end

   })("contenido");
   //Edge symbol end:'contenido'

   //=========================================================
   
   //Edge symbol: 'item'
   (function(symbolName) {   
   
   })("item");
   //Edge symbol end:'item'

   //=========================================================
   
   //Edge symbol: 'bg'
   (function(symbolName) {   
   
   })("bg");
   //Edge symbol end:'bg'

})(jQuery, AdobeEdge, "EDGE-707238604");