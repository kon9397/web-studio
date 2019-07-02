function testimonial() {
    let slides = document.querySelectorAll('.testimonial-text');
    let prev = document.querySelector('#arrowLeft');
    let next = document.querySelector('#arrowRight');
    let personInfos = document.querySelectorAll('.person-info');
    let persons = document.querySelectorAll('.portrait');
    let interval;
    

    let maxHeight = [];

    slides.forEach(slide => maxHeight.push(slide.clientHeight));

    maxHeight = Math.max.apply(null, maxHeight);

    slides.forEach(slide => {
        slide.style.height = maxHeight + 'px';
    });

    function nextSlide() {
        const activeSlide = document.querySelector('.testimonial-text.current');
        const activePersonInfo = document.querySelector('.person-info.current');
        const activePerson = document.querySelector('.portrait.current');

        activeSlide.classList.remove('current');
        activePersonInfo.classList.remove('current');
        activePerson.classList.remove('current');

        if (activeSlide.nextElementSibling && activePersonInfo.nextElementSibling && activePerson.nextElementSibling) {
            activeSlide.nextElementSibling.classList.add('current');
            activePersonInfo.nextElementSibling.classList.add('current');
            activePerson.nextElementSibling.classList.add('current');
        } else {
            slides[0].classList.add('current');
            personInfos[0].classList.add('current');
            persons[0].classList.add('current');
        }
        
    }

    function prevSlide() {
        const activeSlide = document.querySelector('.testimonial-text.current');
        const activePersonInfo = document.querySelector('.person-info.current');
        const activePerson = document.querySelector('.portrait.current');

        activeSlide.classList.remove('current');
        activePersonInfo.classList.remove('current');
        activePerson.classList.remove('current');

        if (activeSlide.previousElementSibling && activePersonInfo.previousElementSibling && activePerson.previousElementSibling) {
            activeSlide.previousElementSibling.classList.add('current');
            activePersonInfo.previousElementSibling.classList.add('current');
            activePerson.previousElementSibling.classList.add('current');
        } else {
            slides[slides.length - 1].classList.add('current');
            personInfos[personInfos.length - 1].classList.add('current');
            persons[persons.length - 1].classList.add('current');
        }
    }

    persons.forEach(person => {
        person.addEventListener('click', () => {
            persons.forEach(person => {
                person.classList.remove('current');
            })

            let index = parseInt(person.getAttribute('data-slide'));
            slides.forEach(slide => slide.classList.remove('current'));
            personInfos.forEach(person => person.classList.remove('current'));
            persons.forEach(person => person.classList.remove('current'));

            slides[index-1].classList.add('current');
            personInfos[index-1].classList.add('current');
            persons[index-1].classList.add('current');
        })
    });

    next.addEventListener('click', function() {
        nextSlide();
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    })

    prev.addEventListener('click', function() {
        prevSlide();
    }) 

    interval = setInterval(nextSlide, 5000);


}