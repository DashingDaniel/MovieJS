function detailsModel(imageUrl,movieName,videoUrl){
    this.imageUrl = imageUrl;
    this.movieName = movieName;
    this.videoUrl = videoUrl;
};

var detailsArray = [];



$(document).ready(function(){
    $("#second").hide();
    $("#third").hide();

             // on click Sign In Button checks that username =='admin' and password == 'password'
             $("#login").click(function(){
             if( $("#loginusername").val()=='' && $("#loginpassword").val()=='') {
                     $("#first").hide();
                      $("#second").show();
                    //  $("#second").append("<p>Hello, admin</p> <br/><input type='button' class='btn btn-primary logout' value='Log Out' />");
                 }
             else {
                 alert("Please try again");
             }

             $(".logout").click(function() {
             $("form")[0].reset();
             $("#second").children('p, input').remove();
             $("#first").show();
             $("#second").hide();
         });
     });
});

function appendArray() {
    $("#second").hide();
    $("#third").show();
    console.log(document.getElementById("imageUrl").value);
    console.log(document.getElementById("videoUrl").value);
    console.log(document.getElementById("movieName").value);
    var element = new detailsModel(
        document.getElementById("imageUrl").value,
        document.getElementById("movieName").value,
        document.getElementById("videoUrl").value
    );
    console.log(element);
    detailsArray.push(element);
    console.log(detailsArray);
    var thirdDiv = document.getElementById('third');
    detailsArray.forEach((item)=>{
        var imgNode = document.createElement('img');
        var caption = document.createElement('div');
        caption.className = caption;
        var para = document.createElement('p');
        var text = document.createTextNode(item.movieName);
        para.appendChild(text);
        caption.appendChild(para);
        imgNode.src = item.imageUrl;
        thirdDiv.appendChild(imgNode);
        thirdDiv.appendChild(caption);
        console.log('name: ',item.movieName);
    })
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
    
//   }
// };
}

function moveToSecond(){
    $("#first").hide();
    $("#second").show();
    $("#third").hide();
}