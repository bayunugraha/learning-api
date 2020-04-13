$.getJSON( "https://api.tvmaze.com/search/shows?q=batman", function( data ) {
    let film = data;

    $.each(film, function(i, data){
        $('#daftar-film').append('<tr><td>'+ data.show.name  +'</td><td>'+ data.show.genres[0]  +','+ data.show.genres[1] +'</td><td>'+ data.show.schedule.time  +' '+ data.show.schedule.days  +'</td><td>'+ data.show.rating.average +'</td><td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter-'+ i +'">See Image</button>  <div class="modal fade" id="exampleModalCenter-'+ i +'" ><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title text-dark" id="exampleModalLongTitle">Image<h5><buttontype="button"class="close"data-dismiss="modal"aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img src="'+ data.show.image.medium +'"/></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div></td></tr>');
    }); 
   });

   