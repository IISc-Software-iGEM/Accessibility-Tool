

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
		})
		.catch(error => {
			console.error('Error fetching resources:', error);
			
		});


});
