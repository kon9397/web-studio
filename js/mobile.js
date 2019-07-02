function mobile() {

    document.querySelectorAll('[data-modal]').forEach(function(selector) {

        selector.addEventListener('click', function(e) {
            let target = this.getAttribute('data-modal');

            if(target === 'close') {
                document.querySelector('.overlay').classList.remove('active');
                document.querySelector('.hamburger-wrapper').classList.remove('active');
            } else {
                document.querySelector('.overlay').classList.add('active');
                document.querySelector('.hamburger-wrapper').classList.add('active');
            }

        })
    })
}