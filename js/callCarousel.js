$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
      items: 5,
        loop: true,
      nav: true,
        margin:10,
        navText: [
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
        ]
     });
});

$(document).ready(function(){
    const slider = $("#slider-two").owlCarousel({
      items: 1,
        loop: true,
      nav: true,
        margin:10,
        navText: [
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
        ]
     });
});

$(document).ready(function(){
    const slider = $("#slider-three").owlCarousel({
      items: 1,
        loop: true,
      nav: false,
        margin:0,
        navText: [
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
        ]
     });
});