// pop-image
document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick =()=>{
        document.querySelector('.popup-image').style.display='block'
        document.querySelector('.popup-image img').src=image.getAttribute('src')
    }
})
document.querySelector('.popup-image span').onclick=()=>{
    document.querySelector('.popup-image').style.display='none'
}

//toggle
document.querySelector('.toggle').onclick=()=>{
    document.querySelector('.toggle-nav').style.display='block'
}
document.querySelector('.close').onclick=()=>{
    document.querySelector('.toggle-nav').style.display='none'
}

document.querySelector('.toggle').onclick=()=>{
    document.querySelector('.toggle-nav').style.display='block'
}
document.querySelector('.close').onclick=()=>{
    document.querySelector('.toggle-nav').style.display='none'
}

