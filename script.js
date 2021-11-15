let image= document.getElementById('dogPic');
let button= document.getElementById('getPics');

//button.addEventListener('click',function(){
function getImage(){
fetch(`https://dog.ceo/api/breeds/image/random`)
   .then(function(response){
    return response.json();
  })
   .then(function(json){
     console.log(json);
     let imgURL=json.message;
     console.log(imgURL);
     image.src=imgURL;
  })
   .catch(function(error){
    console.log(error);
 });
}

getImage();
