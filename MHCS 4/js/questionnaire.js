document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const response = document.getElementById('q1').value;
    document.getElementById('response').textContent = response;
    document.getElementById('results').style.display = 'block';
});
