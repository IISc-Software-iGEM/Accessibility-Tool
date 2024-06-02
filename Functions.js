

document.addEventListener("DOMContentLoaded", function() {

  
	const accessibilityMenuURL = './Toolbar.html'; 	
	const stylesURL = './styles.scss'; 
	
	var link = document.createElement('link');
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
	link.rel = 'stylesheet';
	document.head.appendChild(link);

	fetch(stylesURL)
		.then(response => response.text()) // Parse response as CSS text
		.then(cssText => {
			// Create style element and set content
			var styleTag = document.createElement('style');
			styleTag.textContent = cssText;
			document.head.appendChild(styleTag);
  
			// Fetch accessibility tool HTML content
			return fetch(accessibilityMenuURL);
		})
		.then(response => response.text()) // Parse response as HTML text
		.then(htmlContent => {
			// Create accessibility tool element and set content
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
		            accessToolBar.style.opacity = 1; // Add opacity for smooth transition
		          } else {
		            accessToolBar.style.visibility = "hidden";
		            accessToolBar.style.opacity = 0; // Add opacity for smooth transition
		          }
		        }
		  
		        accessToolButton.addEventListener("click", toggleAccessibilityToolBar);
		        closeButton.addEventListener("click", toggleAccessibilityToolBar);
		})
		.catch(error => {
			console.error('Error fetching resources:', error);
			// Handle errors gracefully (e.g., display an error message)
		});

		
});
  
