(function(){
    let cards = [...document.querySelectorAll('[data-addclass-on-scroll]')]
    window.addEventListener('scroll', addClassOnScroll)

    function elementoAparecer(el){
        let rect = el.getBoundingClientRect()
        return(
            (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom >= innerHeight)
        )
    }

    function addClassOnScroll(){
        if(cards.length === 0){
            window.removeEventListener('scroll', addClassOnScroll)
            console.log('evento removido')
        }

        cards.forEach(el => {
            if(elementoAparecer(el)){
                let delay = parseFloat(el.getAttribute('data-addclass-on-scroll-delay')) || 0

                setTimeout(function(){
                    let _class = el.getAttribute('data-addclass-on-scroll') // valor = show
                    el.classList.add(_class)
                    el.removeAttribute('data-addclass-on-scroll')
                    el.removeAttribute('data-addclass-on-scroll-delay')
                    cards = [...document.querySelectorAll('[data-addclass-on-scroll]')]
                }, delay)
            }
        })
    }

    // addClassOnScroll()
})()