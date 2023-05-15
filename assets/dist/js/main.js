/**
   * Header'a animasyon eklemek için js kodları
   */
 const selectHeader = document.querySelector('#header');
 if (selectHeader) {
   let headerOffset = selectHeader.offsetTop;
   let nextElement = selectHeader.nextElementSibling;

   const headerFixed = () => {
     if ((headerOffset - window.scrollY) <= 0) {
       selectHeader.classList.add('sticked');
       if (nextElement) nextElement.classList.add('sticked-header-offset');
     } else {
       selectHeader.classList.remove('sticked');
       if (nextElement) nextElement.classList.remove('sticked-header-offset');
     }
   }
   window.addEventListener('load', headerFixed);
   document.addEventListener('scroll', headerFixed);
 }