const header = document.getElementById('mainHeader');

const sticky = header.offsetTop;

const addStickyToHeader = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}

window.onscroll = () => {addStickyToHeader()};