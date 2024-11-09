document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const therapist = document.getElementById('therapist').value;
    alert(`Session booked with ${therapist} on ${date} at ${time}`);
});
