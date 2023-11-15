// adding validation on ui
function allLetter(title, author,comment) {
    var returnval=false;
    var letters = /^[A-Za-z\s]+$/;
    if (title.value.match(letters ) && author.value.match(letters) && comment.value.match(letters)) {
        // alert('Your name have accepted : you can try another');
        returnval=true;
        return returnval;
    }
    else {
        alert('Please input alphabet characters only in name field');
        // return res.status(500).render('..../error',{err:error})
        return false; // prevent form submission
    }
}