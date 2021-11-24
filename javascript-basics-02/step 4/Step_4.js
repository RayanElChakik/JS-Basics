function resetFunction(){
    var answer = window.confirm('Press Yes to confirm and Reset.');
    if(answer){
        document.getElementById('form-reset').reset();
    }
}