function openInfo(faq) {
    const clicked;
    if(clicked == true) {
        document.getElementById(faq).classList.remove('d-none');
        clicked = false;
    } else {
        document.getElementById(faq).classList.add('d-none');
        clicked = true;
    }
}