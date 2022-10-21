const immagini = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
/* <div class="col bg-sweden">
</div> */
const primaRiga = document.getElementById('primariga');
let btnNext = document.getElementById('next')
const btnBack = document.getElementById('back')

function chiave(){

}
function checkSucc(){

}



function creaImmagineGrande(){
    chiave()
    for(let key in immagini){
        console.log(immagini[key])
        let miodiv = document.createElement('div');
        miodiv.classList.add('col-12')
        miodiv.classList.add('slide')
        let immagine = document.createElement('img')
        immagine.setAttribute('src' , immagini[key].url);
        primaRiga.append(miodiv);
        miodiv.append(immagine);
        miodiv.classList.add('d-none')
        let titolo = document.createElement('h1');
        let sottotitolo = document.createElement('p');
        titolo.innerHTML = immagini[key].title;
        sottotitolo.innerHTML = immagini[key].description;
        miodiv.append(titolo)
        miodiv.append(sottotitolo)
        miodiv.classList.add('positionRelative')
        titolo.classList.add('positionAbsolute')
        sottotitolo.classList.add('positionAbsolute')
        sottotitolo.classList.add('margineGiu')
        
        

    }
 

}
function inizializzaCard(miodiv){
    let active = 0;
    const cards = document.querySelectorAll('.col-12')
    cards[active].classList.toggle('d-none')

    btnNext.addEventListener('click',function(){
       cards[active].classList.toggle('d-none')
       if(active === immagini.length -1){
        active = 0;

    }else{
        active ++

    }
        cards[active].classList.toggle('d-none')

        console.log(active)
    })
    btnBack.addEventListener('click',function(){
        let counter = 0;
        cards[active].classList.toggle('d-none')
        if(active === counter){
            active = immagini.length -1;

        }else{
            active --

        }
        cards[active].classList.toggle('d-none')

        console.log(active)
    })
}
function creaSlider(){
    let slider = document.getElementById('slider')
    for(let key in immagini){
        let layover = document.createElement('div');
        layover.classList.add('overlay')
        let slide = document.createElement('div');
        slide.classList.add('col');
        slide.classList.add('slide')
        let imgSlide = document.createElement('img');
        imgSlide.classList.add('img-slide')
        imgSlide.setAttribute('src' , immagini[key].url);
        slider.append(slide);
        slide.append(imgSlide);
        slide.classList.toggle('slideLayover')

        slide.addEventListener('mouseenter', function(){
            slide.classList.remove('slideLayover')

        })
        slide.addEventListener('mouseleave', function(){
            slide.classList.add('slideLayover')

        })

 
    }
}
creaSlider()
function layover(){

}
function startSLider(){
    let width = 264;
    let pause = 3000;
    let curerntSLide = 1;
}




creaImmagineGrande()
inizializzaCard()