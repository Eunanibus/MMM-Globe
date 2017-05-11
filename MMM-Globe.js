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
		size : "medium",
        locations : []
	},

	// Define required scripts.
	getScripts: function() {
		return ["encom-globe.js", "grid.js", "data.js", "styles.css", 'defaultData.js'];
	},

	// Define required scripts.
	getStyles: function() {
		return [];
	},

	// Define required translations.
	getTranslations: function() {
		return false;
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		this.globe = null;
		this.translatedSize = this.sizeTranslate(this.config.size);
        this.locations = this.config.locations;
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = "globe";
		wrapper.setAttribute('align', 'center');
		wrapper.setAttribute('align-text', 'center');
		wrapper.setAttribute('font-family', 'Roboto Condensed');
		var container = document.getElementsByClassName("module " + this.name + " " + this.name);
		var width = container[0].offsetWidth;
		wrapper.appendChild(this.createGlobe(width/this.translatedSize, width/this.translatedSize).domElement);
		return wrapper;
	},

	createGlobe : function(width, height) {
	    if(this.locations.length <= 0) {
            Array.prototype.push.apply(data, defaultData);
        }
        else {
            Array.prototype.push.apply(data, this.locations);
        }
		var globe = new ENCOM.Globe(width, height, {
		tiles: grid.tiles, // The locations of the hexes; this really should be refactored into a standard 3d model.. .from grid.js
		data: data // The default pins (Boston, Moscow, etc, and all the non-labelled ones)... from data.js
		});

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
			return 2;
			case "small" :
			return 1.8;
			case "medium" :
			return 1.5;
			case "large" :
			return 1.2;
			case "x-large" :
			return 1;
		}
	}
});
