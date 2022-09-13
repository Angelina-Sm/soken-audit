(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mob-menu-btn-open'),
      closeMenuBtn: document.querySelector('.mob-menu-btn-close'),
      menu: document.querySelector('.mob-menu-open'),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle('no-scroll');
    }
  })();