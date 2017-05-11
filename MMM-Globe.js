/* global Module */

/* Magic Mirror
 * Module: MMM-Globe
 *
 * By Eunan Camilleri eunancamilleri@gmail.com
 * MIT Licensed.
 */

Module.register("MMM-Globe",{

	// Default module config.
	defaults: {
		size : "x-large"
	},

	// Define required scripts.
	getScripts: function() {
		return ["encom-globe.js", "grid.js", "data.js", "styles.css"];
	},

	// Define required scripts.
	getStyles: function() {
		return [];
	},

	// Define required translations.
	getTranslations: function() {
		// The translations for the defaut modules are defined in the core translation files.
		// Therefor we can just return false. Otherwise we should have returned a dictionairy.
		// If you're trying to build yiur own module including translations, check out the documentation.
		return false;
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		this.globe = null;
		this.translatedSize = this.sizeTranslate(this.config.size);
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = "globe";
		wrapper.setAttribute('align', 'center');
		wrapper.appendChild(this.createGlobe(window.innerWidth/this.translatedSize, window.innerHeight/this.translatedSize).domElement);
		return wrapper;
	},

	createGlobe : function(width, height) {
		var globe = new ENCOM.Globe(width, height, {
		tiles: grid.tiles, // The locations of the hexes; this really should be refactored into a standard 3d model.. .from grid.js
		data: data // The default pins (Boston, Moscow, etc, and all the non-labelled ones)... from data.js
		});
		//globe.setBaseColor(this.config.globeColor.toHexString())
		globe.init(animate);  // tell the globe to start the animation loop when everything has been intialized

		function animate(){
			globe.tick(); // this will rotate the globe, and render it to the canvas referenced as globe.domElement
    	requestAnimationFrame(animate);
		}

		this.globe = globe;
		return globe;
	},

	sizeTranslate : function(size){
		switch(size) {
			case "x-small" :
			return 5;
			case "small" :
			return 4;
			case "normal" :
			return 3;
			case "large" :
			return 2;
			case "x-large" :
			return 1;
		}
	}
});
