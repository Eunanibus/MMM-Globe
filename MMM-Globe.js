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
        locations : [],
		markers: [],
		viewAngle: 0,
		dayLength: 28
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
        this.viewAngle = this.convertDegreesToRadians(this.config.viewAngle);
        if (this.config.dayLength >= 0) {
            this.dayLength = parseFloat(this.config.dayLength);
        }
	},

	convertDegreesToRadians: function(degrees) {
		return (parseFloat(degrees) * Math.PI) / 180;
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
		Log.info("Loading data...");
		var globeData = [];

	    if(this.locations.length <= 0) {  // enforce config locations
			Log.info("Loading default locations.");
            Array.prototype.push.apply(globeData, defaultData);
        }
        else {
			Log.info("Loading custom locations.")
            Array.prototype.push.apply(globeData, this.locations);
        }


        Log.info("Creating globe... (" + this.config.dayLength + " sec/rotation)");
		var globe = new ENCOM.Globe(width, height, {
		tiles: grid.tiles, // The locations of the hexes; this really should be refactored into a standard 3d model.. .from grid.js
		data: globeData, // The default pins (Boston, Moscow, etc, and all the non-labelled ones)... from data.js
		viewAngle: this.viewAngle, // tilt the globe
		dayLength: this.dayLength * 1000 // time for one rotation
		});

		globe.init(animate);  // tell the globe to start the animation loop when everything has been intialized

		function animate(){
			globe.tick(); // this will rotate the globe, and render it to the canvas referenced as globe.domElement
    	requestAnimationFrame(animate);
		}

		this.globe = globe;
		data = null;
		return globe;
	},

	sizeTranslate : function(size){
		switch(size) {
			case "x-small" :
			return 4;
			case "small" :
			return 3;
			case "medium" :
			return 2;
			case "large" :
			return 1.5;
			case "x-large" :
			return 1;
		}
	},

	speedTranslate : function(speed) {

	}
});
