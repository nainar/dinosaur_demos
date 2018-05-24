import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js');

if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('backgroundpainter.js');
  console.log('paint script installed!');
}
let backgroundPos = 0;
let fontPos = 0;
const fontOptions = [
{
	text: 'CLASSIC',
	style: {
		'font-family': "Roboto",
		'text-shadow': 'none'
	}
},
{
	text: 'MODERN',
	style: {
		'font-family': "'Open Sans Condensed', sans-serif",
		'text-shadow': 'none'
	}
},
{
	text: 'NEON',
	style: {
		'font-family': '"Cedarville Cursive", cursive',
		'text-shadow': '#32CD32 10px 0 10px'			
	}
},
{
	text: 'TYPEWRITER',
	style: {
		'font-family': 'Courier New',
		'text-shadow': 'none'
	}
},
{
	text: 'STRONG',
	style: {
		'font-family': 'small-caps bold sans-serif',
		'text-shadow': 'none'
	}
}];

const backgroundOptions = [
{
	start: 'deeppink',
	end: 'orange'
},
{
	start: 'skyblue',
	end: 'purple'
},
{
	start: 'orange',
	end: 'yellow'
},
{
	start: 'lightgreen',
	end: 'cyan'
},
{
	start: 'magenta',
	end: 'deeppink'
}];

function paintCycler() {
	const newPaintArgs = backgroundOptions[backgroundPos];
	background.style.background = colorpicker.style.background = `paint(backgroundpainter, ${newPaintArgs.start}, ${newPaintArgs.end})`;
	backgroundPos = (backgroundPos+1)%backgroundOptions.length;
}

function fontCycler() {
	fontPos = (fontPos+1)%fontOptions.length;
	const newFontArgs = fontOptions[fontPos];
	fontPicker.innerText = newFontArgs.text;
	for (key in newFontArgs.style) {
		content.style.setProperty(key, newFontArgs.style[key]);
		fontPicker.style.setProperty(key, newFontArgs.style[key]);
	}

}
