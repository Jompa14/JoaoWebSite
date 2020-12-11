appear({
  init: function init(){
    console.log('dom is ready');
  },
  elements: function elements(){
    // work with all elements with the class "track"
    return document.getElementsByClassName('track');
  },
  appear: function appear(el){
    console.log('visible', el);
  },
  disappear: function disappear(el){
    console.log('no longer visible', el);
  },
  bounds: 200,
  reappear: true
});
