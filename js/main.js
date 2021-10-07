
// tap

let tapWidthBox=$('#tap').outerWidth();
$( "#big-tap" ).css({left:`-${tapWidthBox}`})

     $('#close').click(function() { 


$('#close').toggleClass('fa-times');
$('#colse').toggleClass('fa-globe');
     
          let tapWidthBox=$('#tap').outerWidth();

       

          if ($('#big-tap').css('left')=='0px' )
          {
               $('.fade1').slideUp(1300);
               $('.fade2').slideUp(1000);
               $('.fade3').slideUp(800);
               $('.fade4').slideUp(600);
               $('.fade5').slideUp(500);
               $('.fade6').slideUp(400);
               $( "#big-tap" ).animate({left:`-${tapWidthBox}`}, 500)
          }
          else{
               $('.fade1').slideDown(1000)
               $('.fade2').slideDown(800)
               $('.fade3').slideDown(700)
               $('.fade4').slideDown(600)
               $('.fade5').slideDown(500)
               $('.fade6').slideDown(400)
               $( "#big-tap" ).animate({left:`0px`}, 500)
          }
           });


     //    validtion
   

     var submitBtn=document.getElementById("submitBtn");
     var inputs=document.getElementsByClassName("form-control");
               var nameAlert=document.getElementById("nameAlert");
               var productName=document.getElementById("productName");
               var nameAlert2=document.getElementById("nameAlert2");
               var productName2=document.getElementById("productName2");
               var nameAlert3=document.getElementById("nameAlert3");
               var productName3=document.getElementById("productName3");
               var nameAlert4=document.getElementById("nameAlert4");
               var productName4=document.getElementById("productName4");
               var nameAlert5=document.getElementById("nameAlert5");
               var productName5=document.getElementById("productName5");
               var nameAlert6=document.getElementById("nameAlert6");
               var productName6=document.getElementById("productName6");
            
     submitBtn.removeAttribute("disabled")
function fun(){
          var nameRejex=/^[A-Z][a-z]{2,8}$/
          if(!nameRejex.test(productName.value))
          {
            
              productName.classList.add("is-invalid");
              productName.classList.remove("is-valid");
              nameAlert.classList.remove("d-none");
              
       
          }
          else{
              productName.classList.add("is-valid");
              productName.classList.remove("is-invalid");
              nameAlert.classList.add("d-none");
    
          }
     }

 function fun2(){
    var nameRejex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!nameRejex.test(productName2.value))
    {
     
     productName2.classList.add("is-invalid");
     productName2.classList.remove("is-valid");
     nameAlert2.classList.remove("d-none");
     

    }
    else{
   
     productName2.classList.add("is-valid");
     productName2.classList.remove("is-invalid");
     nameAlert2.classList.add("d-none");
    

    }
}
function fun3 (){
     var nameRejex=/^[0-9]{11}$/
     if(!nameRejex.test(productName3.value))
     {
    
         productName3.classList.add("is-invalid");
         productName3.classList.remove("is-valid");
         nameAlert3.classList.remove("d-none");
      
     }
     else{
   
         productName3.classList.add("is-valid");
         productName3.classList.remove("is-invalid");
         nameAlert3.classList.add("d-none");
     
 
     }
    
 }
    
 function fun4 (){
     var nameRejex=/^[1-9]{1,9}$/
     if(!nameRejex.test(productName4.value))
     {
   
         productName4.classList.add("is-invalid");
         productName4.classList.remove("is-valid");
         nameAlert4.classList.remove("d-none");
 
 
     }
     else{
       
         productName4.classList.add("is-valid");
         productName4.classList.remove("is-invalid");
         nameAlert4.classList.add("d-none");
     
 
     }
    
 }

 function fun5 (){
     var nameRejex=/[1-9]{8,20}[a-z]{1,10}/
     if(!nameRejex.test(productName5.value))
     {

         productName5.classList.add("is-invalid");
         productName5.classList.remove("is-valid");
         nameAlert5.classList.remove("d-none");
  
 
     }
     else{
        
         productName5.classList.add("is-valid");
         productName5.classList.remove("is-invalid");
         nameAlert5.classList.add("d-none");
        

 
     }
// fun6(productName5.value)
 }


 
  function fun6()

  {
       
     let nameRejex2=productName5.value
          if(nameRejex2==productName6.value &&productName6.value!='')

          {
         
               productName6.classList.add("is-valid");
               productName6.classList.remove("is-invalid");
               nameAlert6.classList.add("d-none");

          }

     else{
      
          productName6.classList.add("is-invalid");
          productName6.classList.remove("is-valid");
               nameAlert6.classList.remove("d-none");
         
     }
}

submitBtn.removeAttribute("disabled");



// function to get data from API

let searh1=document.getElementById('searh1')
let searh2=document.getElementById('searh2')
let moves=[];
 async function getMoves(currenValue){
   
let responce =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k
`)
let finalresulat =await responce.json()
let moves=finalresulat.results;
displayMovies(moves)

let a=moves[2].currenValue
console.log(currenValue)}
function displayMovies(moves){
    
let cartouna=``
for(i=0;i<moves.length;i++)

{cartouna+=`
<div class="col-md-4 mb-3 bor">
<div class="about-img ">
   <div class="img-layer">
       <div class="img-layer-container">
           <img class="w-100" src="https://image.tmdb.org/t/p/w500${moves[i].poster_path}" alt="" srcset="">
           <div class="layer ">
       <h3>${moves[i].title}</h3>
                <p>${moves[i].overview}</p>
                <p>Rate:${moves[i].vote_average}</p>
                <p>${moves[i].release_date}</p>
           </div>
       </div>
   </div>
</div> 
</div> 
`
}
document.getElementById('demo').innerHTML=cartouna
}
  getMoves()


//   search

searh1.addEventListener("keyup", function() {
     currenValue = searh1.value;
     searchProudct(currenValue)});
 function searchProudct(currenValue) {
     let prouductContainer=['a','q','a','A','x','z','r','u','h']
     for (i = 0; i < prouductContainer.length; i++)
      {
console.log(prouductContainer)
//        if (
//          prouductContainer[i].toLowerCase().includes(term.toLowerCase()) ==true)
//         {
//     console.log('yes')
//        }
//        else{
//           console.log('no')   
//        }

     }
     // document.getElementById("displayProudct").innerHTML = cartouna;
   }
 