// Toggle : permettant de garder la navbar collée (sticky).

window.addEventListener("scroll",function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Toggle : actif sur le clic et la nav (active).

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}