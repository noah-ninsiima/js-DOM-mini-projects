let fontSizeDropdown = document.getElementById('font-size');
let heading = document.getElementById('heading');

fontSizeDropdown.addEventListener("change",function() {
    //console.log(fontSizeDropdown.value)

    let fontsize = fontSizeDropdown.value;

    heading.style.fontSize =fontsize;

})

let backgroundColourDropdown = document.getElementById('Background-Colour');
backgroundColourDropdown.addEventListener("change",function() {
 console.log(backgroundColourDropdown.value)

    let background = backgroundColourDropdown.value;

    heading.style.background =background;

})

let FontFamilyDropdown = document.getElementById('Font-Family');
FontFamilyDropdown.addEventListener("change",function() {
 console.log(FontFamilyDropdown.value)

    let font = FontFamilyDropdown.value;

    heading.style.fontFamily=font;

})