/*
 * 
 * Busca os reviews
 *  
 */
let googleReviews;
googleReviews = JSON.parse(localStorage.getItem("googleReviews"));
/*$.get("api/getReviews.php", function(data){
    googleReviews = JSON.parse(data);
    makeCarousel();
});*/

function makeCarousel(){
    let reviewsResult = googleReviews.result.reviews;
    let el = "";
    for (let i = 0; i < reviewsResult.length; i++){
        let reviewRating = '<i class="fa fa-star"></i> '.repeat(reviewsResult[i].rating);
        el += `<div class="d-flex justify-content-center mx-4 mb-4">
                <div class="card text-center" style="max-width: 500px;">
                    <div class="card-body">
                        <div class="img mb-2"> <img src="${reviewsResult[i].profile_photo_url}" width="100" class="rounded-circle"> </div>
                        <h5 class="mb-2">${reviewsResult[i].author_name}</h5>
                        <div class="ratings mt-2">${reviewRating}</div>
                        <small>${reviewsResult[i].text}</small>
                    </div>
                </div>
            </div>`;
    }
    $('#carouselReviews').html(el);
    constructCarousel();
}

