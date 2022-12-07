$("form").on("submit", function(evt){
evt.preventDefault();
let title = $('#title').val();
let rating = $('#rating').val(); 
let movieData = {title,rating};

let HTMLtoAppend = createHtml(movieData);
console.log(movieData);
console.log(HTMLtoAppend);

$("#table-bod").append(HTMLtoAppend);




$("form").trigger("reset");

});

function createHtml(data){
    return `
    <tr>
         <td>${data.title}</td>
         <td>${data.rating}</td>
         <td> <button id = "delete">Delete</button></td>
     </tr>
     `
};

$("#table-bod").on("click","#delete",function(){
    $(this).parents().eq(1).remove();
});
