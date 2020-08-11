const doc = document;

// burgerMenuBtn
const 
    signUp = doc.querySelector('.signUp'),
    menu = doc.querySelector('.menu'),
    newLi = doc.createElement('li'),
    clouse = doc.querySelector('.menu__close'),
    burgerMenuBtn = doc.querySelector('.burgerMenuBtn'),
    burgerMenuBtnSpan = doc.querySelector('.burgerMenuBtn span');

burgerMenuBtn.onclick = function() {
    burgerMenuBtnSpan.classList.toggle('active');
    menu.classList.toggle("animate");

    newLi.append(signUp);
    menu.append(newLi);
    newLi.className = 'menu__item';
}

clouse.onclick = function(e) {
    const target = e.target;
    if (target.classList.contains('menu__close')) {
        menu.classList.remove('animate');
        burgerMenuBtnSpan.classList.remove('active');
    }
}

doc.onclick = function(e) {
    if (e.target.closest('.menu')) {
        menu.classList.remove('animate');
        burgerMenuBtnSpan.classList.remove('active');
    }
    // console.log(e.target);
}
// END burgerMenuBtn

// fixed menu
window.onscroll = function showHeader() {
    let header = doc.querySelector('.headerTop');

    if (window.pageYOffset > 790) {
        header.classList.add('headerTop_fixed'); 
    } else {
        header.classList.remove('headerTop_fixed'); 
    }
}
// END fixed menu

// accordion
const 
    accordion = doc.querySelectorAll('.accordion'),
    accordionContent = doc.querySelectorAll('.accordion__content');

doc.addEventListener('click', function(e){
    if (!e.target.closest('.accordionBlock')) {
      for (let j = 0; j < accordionContent.length; j++) {
          accordionContent[j].classList.remove('accordion__content_show');
      }
      accordionContent[0].classList.add('accordion__content_show');
    }
    console.log(e.target);
});

for (let i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
      for (let j = 0; j < accordionContent.length; j++) {
          accordionContent[j].classList.remove('accordion__content_show');
      }
      accordionContent[i].classList.toggle('accordion__content_show');
    }
}

accordionContent[0].classList.add('accordion__content_show');
// END accordion




// form
const 
    mainForm = doc.mainForm,
    submitBtn = mainForm.submitBtn,
    formFields = mainForm.reqField.elements;

const alertText = doc.querySelector('.alertText');

let isReactValid = false;

reactValid(formFields);

submitBtn.onclick = function(e) {
    e.preventDefault();

    if (formValid(formFields) && isReactValid) {
        console.log('form valid');
        
        this.form.submit();
    } else {
        console.log('form not valid');
    }
}

function formValid(fields) {
    let valid = true;

    for (let i = 0; i < fields.length; i++ ) {
        const 
            currVal = fields[i].value,
            valLength = currVal.length;
            
        if (valLength < 5) {
            fields[i].classList.add('alert');
            fields[i].classList.remove('success');
            alertText.classList.add('alertText_show');
            valid = false;
        } else {
            fields[i].classList.remove('alert');
            fields[i].classList.add('success');
            alertText.classList.remove('alertText_show');
        }
    }

    return valid;
}

function reactValid(fields) {
    for(let i = 0; i < fields.length; i++ ) {
        fields[i].oninput = function() {

            if (this.value.length >= 5) {
                fields[i].classList.remove('alert');
                fields[i].classList.add('success');
                alertText.classList.remove('alertText_show');
                isReactValid = true;
            } else {
                fields[i].classList.add('alert');
                fields[i].classList.remove('success');
                alertText.classList.add('alertText_show');
                isReactValid = false;
            }
            
        }
    }
}
// END form



// button top
(function() {

  const goTopBtn = document.querySelector('.getTop');

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('getTop_show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('getTop_show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

// END button top


// filter
const 
    portfolioMenuItem = doc.querySelectorAll('.portfolioMenu__item'),
    portfolioSitesItem = doc.querySelectorAll('.portfolioSites__item');

function toggleActiveClass(portfolioMenu__link_active){
    portfolioMenuItem.forEach(item => {
      item.classList.remove('portfolioMenu__item_active');
    })
    portfolioMenu__link_active.classList.add('portfolioMenu__item_active');
}

function toggleimages(dataClass){
    if (dataClass === 'all'){
        for(let i = 0; i < portfolioSitesItem.length; i++){
            portfolioSitesItem[i].style.display = 'block';
        }
    } else{
        for (let i = 0; i < portfolioSitesItem.length; i++)
            portfolioSitesItem[i].dataset.class === dataClass ? portfolioSitesItem[i].style.display = 'block' : portfolioSitesItem[i].style.display = 'none';
    }
}

for (let i = 0; i < portfolioMenuItem.length; i++){
    portfolioMenuItem[i].addEventListener('click', function(){
        toggleActiveClass(portfolioMenuItem[i]);
        toggleimages(portfolioMenuItem[i].dataset.class);
    });
}
// END filter






























