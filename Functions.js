

document.addEventListener("DOMContentLoaded", function() {
  
	const accessibilityMenuURL = './Toolbar.html'; 	
	const stylesURL = './styles.scss'; 
	
	var link = document.createElement('link');
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
	link.rel = 'stylesheet';
	document.head.appendChild(link);

	fetch(stylesURL)
		.then(response => response.text())
		.then(cssText => {
			var styleTag = document.createElement('style');
			styleTag.textContent = cssText;
			document.head.appendChild(styleTag);
  
			return fetch(accessibilityMenuURL);
		})
		.then(response => response.text())
		.then(htmlContent => {
			var createToolBox = document.createElement('div');
			createToolBox.id = 'init-access-tool';
			createToolBox.innerHTML = htmlContent;
  
			document.body.insertBefore(createToolBox, document.body.firstChild);
			const accessToolButton = document.querySelector(".accesstool");
			const accessToolBar = document.querySelector(".access-tool-bar");
			const closeButton = document.querySelector(".close-button");
		
			function toggleAccessibilityToolBar() {
			if (accessToolBar.style.visibility === "hidden") {
				accessToolBar.style.visibility = "visible";
				accessToolBar.style.opacity = 1; 
			} else {
				accessToolBar.style.visibility = "hidden";
				accessToolBar.style.opacity = 0;
			}
			}
		
			accessToolButton.addEventListener("click", toggleAccessibilityToolBar);
			closeButton.addEventListener("click", toggleAccessibilityToolBar);
			
			// invert fuction
			const invertButton = document.querySelector("#Invert");
			invertButton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				document.body.classList.toggle('invert');
			});

			// grayscale function
			const grayscaleButton = document.querySelector("#Grayscale");
			grayscaleButton.addEventListener('click', function() {
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				document.body.classList.toggle('grayscale');
			});

			// low saturation function
			const lowsaturationbutton = document.querySelector("#lowsaturation");
			lowsaturationbutton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.classList.toggle('lowsaturation');
			}); 

			// high saturation function
			const highSaturationButton = document.querySelector("#highsaturation");
			highSaturationButton.addEventListener('click', function() {
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.classList.toggle('highsaturation');
			});

		

			


			// increase Font Size function
			const increaseFontSizeButton = document.querySelector('#increasefontsize');

			increaseFontSizeButton.addEventListener('click', function() {
			  const currentFontSize = window.getComputedStyle(document.body).fontSize;
			  let fontSizeUnit = 'px'; // Default unit (can be adjusted)
			  let fontSizeValue = parseFloat(currentFontSize);
			
			  if (currentFontSize.includes('em')) {
				fontSizeUnit = 'em';
			  } else if (currentFontSize.includes('rem')) {
				fontSizeUnit = 'rem';
			  }
			
			  const newFontSize = fontSizeValue * 1.2;
			  document.body.style.fontSize = newFontSize + fontSizeUnit;
			});

			// decrease Font Size function
			const decreaseFontSizeButton = document.querySelector('#decreasefontsize');

			decreaseFontSizeButton.addEventListener('click', function(){
			  const currentFontSize = window.getComputedStyle(document.body).fontSize;
			  let fontSizeUnit = 'px'; // Default unit (can be adjusted)
			  let fontSizeValue = parseFloat(currentFontSize);
			
			  if (currentFontSize.includes('em')) {
				fontSizeUnit = 'em';
			  } else if (currentFontSize.includes('rem')) {
				fontSizeUnit = 'rem';
			  }
			
			  const newFontSize = fontSizeValue / 1.2;
			  document.body.style.fontSize = newFontSize + fontSizeUnit;
			});


			//increase letter spacing function
			const increaseLetterSpacingButton = document.querySelector('#increaseletterspacing');
			
			increaseLetterSpacingButton.addEventListener('click', function() {
				const currentLetterSpacing = window.getComputedStyle(document.body).letterSpacing;
				let letterSpacingValue = parseFloat(currentLetterSpacing);
				
				if(isNaN(letterSpacingValue)) {
					letterSpacingValue = 0;
				}

				const newLetterSpacing = letterSpacingValue + 1;
				document.body.style.letterSpacing = newLetterSpacing + 'px';
			});

			//increase line height function
			const increaseLineHeightButton = document.querySelector('#increaselineheight');

			increaseLineHeightButton.addEventListener('click', function() {	
				const currentLineHeight = window.getComputedStyle(document.body).lineHeight;
				let lineHeightValue = parseFloat(currentLineHeight);
				
				if(isNaN(lineHeightValue)) {
					lineHeightValue = 50;
				}

				const newLineHeight = lineHeightValue + 1;
				document.body.style.lineHeight = newLineHeight + 'px';
			});



			//changing the color of the cursor to black
			const cursorColorButton = document.querySelector('#blackcursor');

			cursorColorButton.addEventListener('click', function() {
				document.body.style.cursor = 'black';
			});

			//changing the color of the cursor to white
			const cursorColorButtonWhite = document.querySelector('#whitecursor');

			cursorColorButtonWhite.addEventListener('click', function() {
				document.body.style.cursor = 'white';
			});

			//increasing the cursor size
			const cursorSizeButton = document.querySelector('#increasecursor');

			cursorSizeButton.addEventListener('click', function() {
				const currentCursorSize = window.getComputedStyle(document.body).cursor;
				let cursorSizeValue = parseFloat(currentCursorSize);
				
				const newCursorSize = cursorSizeValue + 1;
				document.body.style.cursor = newCursorSize + 'px';
			});

			//decreasing the cursor size
			const cursorSizeButtonDecrease = document.querySelector('#decreasecursor');

			cursorSizeButtonDecrease.addEventListener('click', function() {
				const currentCursorSize = window.getComputedStyle(document.body).cursor;
				let cursorSizeValue = parseFloat(currentCursorSize);
				
				const newCursorSize = cursorSizeValue - 1;
				document.body.style.cursor = newCursorSize + 'px';
			});


			// reset function
			const resetButton = document.querySelector("#reset");
			resetButton.addEventListener('click', function() {
				if (document.body.classList.contains('grayscale')) {
					document.body.classList.remove('grayscale');
				}
				if (document.body.classList.contains('highsaturation')) {
					document.body.classList.remove('highsaturation');
				}
				if (document.body.classList.contains('lowsaturation')) {
					document.body.classList.remove('lowsaturation');
				}
				if (document.body.classList.contains('invert')) {
					document.body.classList.remove('invert');
				}
				document.body.style.fontSize = '16px';
				document.body.style.letterSpacing = 'normal';
				document.body.style.lineHeight = 'normal';

			});
			
		})

		.catch(error => {
			console.error('Error fetching resources:', error);
				
		});

		
});
