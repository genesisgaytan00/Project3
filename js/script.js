function initMap(){
    let iit={lat:41.8349, lng:-87.6270};
    let map = new google.maps.Map(
        document.getElementById('map'),{center:iit,zoom: 16}
    );
    let marker = new google.maps.Marker({position: iit, map: map});




}