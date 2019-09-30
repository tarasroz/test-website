
var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

initMap = (a=34.0522300, b=-118.2436800) => {
    let location = { lat: a, lng: b };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location,
        disableDefaultUI: true
    });

    const styles = {
        default: null,
        hide: [
            {
                featureType: 'poi.business',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                stylers: [{ visibility: 'off' }]
            }
        ]
    };
    map.setOptions({ styles: styles['hide'] });

    const iconBase = './assets/contacts/';
    const icons = {
        info: [{
            icon: iconBase + 'marker.png'
        }]
    };

    const marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: location,
        icon: icons.info[0].icon
    });
};

// let $ = jQuery;
const gps_on = "./assets/contacts/gps_on.png";
const gps_off = "./assets/contacts/gps_off.png";

gps = (num) => {
    for (let i = 0; i < 4; i++) {
        if (num === i) {
            $('.city img')[i].attributes[0].nodeValue = gps_on;
        } else {
            $('.city img')[i].attributes[0].nodeValue = gps_off;
        }
    }
};

set$Gps = (indexClassGps, indexGps, a, b) => {
    $('.button_' + `${indexClassGps}`).on('click', () => {
        initMap(a, b);
        $('.map-info h3')[0].innerText = $('.button_' + `${indexClassGps}` + ' h4')[0].innerText.slice(0, -5);;
        $('.map-info p')[0].innerText = $('.button_' + `${indexClassGps}` + ' p')[0].innerText;
        $('.contacts-info p')[0].innerText = $('.button_' + `${indexClassGps}` + ' p')[0].innerText;

        gps(indexGps);
    });
}

$(document).ready(() => {
    set$Gps(1, 0, 34.0522300, -118.2436800);
    set$Gps(2, 1, 40.7142700, -74.0059700);
    set$Gps(3, 2, 42.3584300, -71.0597700);
    set$Gps(4, 3, 42.3314300, -83.0457500);
});