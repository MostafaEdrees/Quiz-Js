
 $(document).ready(function() {
    search3()
  });
// searsh
searchText = document.getElementById("searh2");
let searh1=document.getElementById('searh1')
        let moves2=[];
async function search3(){

            let responce =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`)
            let finalresulat3 =await responce.json()
            let moves3=finalresulat3.results;
            let newProduct = "";
            
            for (var i = 0; i < moves3.length; i++) {
            if(moves3[i].original_title.toLowerCase().includes(searh1.value.toLowerCase()) )
            {
            newProduct += `
            <div class="col-md-4 mb-3 bor">
            <div class="about-img ">
             <div class="img-layer">
                 <div class="img-layer-container">
                     <img class="w-100" src="https://image.tmdb.org/t/p/w500${moves3[i].poster_path}" alt="" srcset="">
                     <div class="layer ">
                 <h3>${moves3[i].title}</h3>
                          <p>${moves3[i].overview}</p>
                          <p>Rate:${moves3[i].vote_average}</p>
                          <p>${moves3[i].release_date}</p>
                     </div>
                 </div>
             </div>
            </div> 
            </div> 
            `;
            
            }
            
            }    
            
            document.getElementById("demo").innerHTML = newProduct;
}       
searchText.onkeyup = async function search(){
        
        //   console.log()
 let responce =await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${searchText.value}`)

 let finalresulat2 =await responce.json()
 let moves2=finalresulat2.results;
 
  let newProduct = "";

   for (var i = 0; i < moves2.length; i++) {

    if(moves2[i].original_title.toLowerCase().includes(searchText.value.toLowerCase()) )
    {
    newProduct += `
    <div class="col-md-4 mb-3 bor">
    <div class="about-img ">
       <div class="img-layer">
           <div class="img-layer-container">
               <img class="w-100" src="https://image.tmdb.org/t/p/w500${moves2[i].poster_path}" alt="" srcset="">
               <div class="layer ">
           <h3>${moves2[i].title}</h3>
                    <p>${moves2[i].overview}</p>
                    <p>Rate:${moves2[i].vote_average}</p>
                    <p>${moves2[i].release_date}</p>
               </div>
           </div>
       </div>
    </div> 
    </div> 
    `;

}

 }    

    document.getElementById("demo").innerHTML = newProduct;
}
async function search4(term){

    let responce =await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${term}`)
    let finalresulat4 =await responce.json()
    let moves4=finalresulat4.results;
    let newProduct = "";

    for (var i = 0; i < moves4.length; i++) {
    newProduct += `
    <div class="col-md-4 mb-3 bor">
    <div class="about-img ">
     <div class="img-layer">
         <div class="img-layer-container">
             <img class="w-100" src="https://image.tmdb.org/t/p/w500${moves4[i].poster_path}" alt="" srcset="">
             <div class="layer ">
         <h3>${moves4[i].title}</h3>
                  <p>${moves4[i].overview}</p>
                  <p>Rate:${moves4[i].vote_average}</p>
                  <p>${moves4[i].release_date}</p>
             </div>
         </div>
     </div>
    </div> 
    </div> 
    `;
    }    
    document.getElementById("demo").innerHTML = newProduct;
    }
    
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




 async function getMoves(){
   
let responce =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k
`)
let finalresulat =await responce.json()
let moves=finalresulat.results;
displayMovies(moves)
}

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
document.getElementById('demo').innerHTML=cartouna;

}


  getMoves()





  document.getElementById("fade1").addEventListener("click", function() {
   
    let term= document.getElementById("fade1").innerHTML ;
    search4(term)
     
   });

   document.getElementById("fade2").addEventListener("click", function() {
   
    let term2= document.getElementById("fade2").innerHTML ;
    search4(term2)
     
   });
   
document.getElementById("fade3").addEventListener("click", function() {
   
    let term= document.getElementById("fade3").innerHTML ;
    search4(term)
     
   });
   
document.getElementById("fade4").addEventListener("click", function() {
   
    let term= document.getElementById("fade4").innerHTML ;
    search4(term)
     
   });
   
document.getElementById("fade5").addEventListener("click", function() {
   
    let term= document.getElementById("fade5").innerHTML ;
    search4(term)
     
   });
   document.getElementById("fade6").addEventListener("click", function() {
   
    let term= document.getElementById("fade6").innerHTML ;
    search4(term)
     
   });










