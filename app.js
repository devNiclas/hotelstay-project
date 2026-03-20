function chooseRoom(roomType) {
    document.getElementById('room-chosen').textContent = roomType;


    document.getElementById('rooms-selection').classList.add('d-none');
    document.getElementById('booking-form-selection').classList.remove('d-none');

}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();




    document.getElementById('booking-form-selection').classList.add('d-none');
    document.getElementById('confirmation-msg').classList.remove('d-none');



});