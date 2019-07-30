var output = document.getElementById('video');

var idx = 0;
var filters = [
'grayscale',
'sepia',
'blur',
'brightness',
'contrast',
'hue-rotate', 'hue-rotate2', 'hue-rotate3',
'saturate',
'invert',
''
];

function changeFilter(e) {
    // target attr is used to target the element for which this fun is gonna used
    var el = e.target;

    // expression written as a index in filters is basically evaluate the each index value 
    // starting from zero index and continue to gonna apply this filter. 
    // one important point when it reaches the end of index it then quickly jumps to first index
    var effect = filters[idx++ % filters.length];
    // when we've some string value. it is always evaluated as true when we use it in if clause
    if (effect) {
        // classname property is gonna apply a perticular class already defined in style tag
        el.className = effect;
    }
    // Do not propagate the event
    event.stopPropagation();    
    event.preventDefault(); 
}

// it is gonna trigger the click event 
output.addEventListener('click', changeFilter, false);
