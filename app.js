document.addEventListener('keydown', function(event){
    document.getElementById('keyOutput').textContent = `you pressed ${event.key}`;
});