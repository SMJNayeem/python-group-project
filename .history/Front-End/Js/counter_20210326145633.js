// $(function(){

//     $('.counter').counterUp({
//         delay: 1000,
//         time: 2000
//     });



// });

const counters = document.querySelectorAll('.counter');
const speed = 5000

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText
        const inc = target / speed

        if (count < target) {
            counter.innerText = Math.ceil(count + inc)
            setTimeout(updateCount, .5)
        }
        else {
            count.innerText = target
        }
    }

    updateCount()
})