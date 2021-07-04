const list_section_div_ul = document.querySelector(".list-section-div-ul");

const coordenadas = {
    click_clientX: 0,
    mousewheel_clientX: 0
}

var delta = 0;

function horizontal_scroll(e) {
    e = window.event || e;
    delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    list_section_div_ul.scrollLeft -= (delta * 300);
    e.preventDefault();
}

list_section_div_ul.addEventListener('mousewheel', horizontal_scroll);

list_section_div_ul.addEventListener('mousedown', (e) => {
    coordenadas.mousewheel_clientX = e.clientX;

    if (coordenadas.click_clientX > coordenadas.mousewheel_clientX) {
        list_section_div_ul.scrollLeft -= 300;
    }  else {
        list_section_div_ul.scrollLeft += 300;
    }
});

list_section_div_ul.addEventListener('click', (e) => {
    coordenadas.click_clientX = e.clientX;
});

