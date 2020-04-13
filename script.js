$.getJSON( "https://api.tvmaze.com/search/shows?q=batman", function( data ) {
    let film = data;
    console.log(data);
    $.each(film, function(i, data){
        let genre = '', html = '';
        let len_genre = data.show.genres.length;
        data.show.genres.map((r, i) => {
            genre += r;
            if(i != (len_genre - 1)) genre += ', '; 
        })
        html = `<tr>
            <td>${data.show.name}</td>
            <td>${genre}</td>
            <td>${data.show.schedule.time} ${data.show.schedule.days}</td>
            <td>${data.show.rating.average}</td>
            <td>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter-${i}">See Image</button>
                <div class="modal fade" id="exampleModalCenter-${i}" >
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content bg-dark">
                            <div class="modal-header  d-flex justify-content-center ">
                                <h3 class="modal-title text-white text-center" id="exampleModalLongTitle">${data.show.name}<h3>
                            </div>
                            <div class="modal-body">
                                <img src="${data.show.image.medium}"/>
                            </div>
                            <div class="modal-footer d-flex flex-column">
                                <p class="mb-3 mt-2">${data.show.summary}</p>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>`;
        $('#daftar-film').append(html);
    }); 
   });