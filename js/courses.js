var left_arrow = document.querySelector('.left-arrow');
var right_arrow = document.querySelector('.right-arrow')
var slide_container = document.querySelector('.grid-container')
var array_of_courses = Array.from(slide_container.children)
var slide_container_width = slide_container.getBoundingClientRect().width;


left_arrow.addEventListener('click', e => {
    array_of_courses.forEach(element => {
        element.style.transform = "translateX(100px)";
    })
})

right_arrow.addEventListener('click', e=> {
    array_of_courses.forEach(element => {
       
            element.style.transform = 'translateX(-250px)';
        
    });
    
})




