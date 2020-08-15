$(document).ready(function(){
    $('.tbody').on('click', '.delete',function(){
        console.log("deleted")
      var id=  $(this).attr("id");
       console.log(id);
    //    $('body').on('click','button', function(){
    //     $(this).closest('tr').remove();
        
    //  })

    $.ajax({
        url : "http://localhost:7898/users/" + id,
        method: "DELETE",
        success : function(response){
            console.log(response)

            $('#'+id).remove();
        }        
      })
})

    $('.add').on('click', function(){
        var username = $('.username').val();
        var name = $('.name').val();
        var age = $('.age').val();
        var city = $('.city').val();

        $.ajax({
            url : "http://localhost:7898/users/add" ,
            method : "POST",
            data : {
                username : username,
                name: name,
                age: age,
                city : city
            },
            success : function(response){
                console.log(response)
                var tr = $('<tr/>');
                tr.attr("id", response.insertedId)
                
                tr.append($('<td/>').text(username));
                tr.append($('<td/>').text(name))
                tr.append($('<td/>').text(age))
                tr.append($('<td/>').text(city))
                tr.append($('<td/>').append(($('<button/>').attr("id", response.insertedId).addClass('btn btn-danger').addClass('delete').text("Delete"))));
                console.log(tr);

                $('.tbody').append(tr);
                  }
            })
         })   
})