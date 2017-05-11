# MMM-HTTPRequestDisplay
This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can translate XML responses from HTTP requests and display formatted information. Sensors such as Arduino's, ESP8266, Microcontrollers or small servers that maintain sensor data based as XML may find this useful.

This is version 1.0 and therefore not at a stage for widespread use.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/Eunanibus/MMM-HTTPRequestDisplay`. A new folder will appear.
2. Add it to the modules array in the `config/config.js` (see next step below)

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-HTTPRequestDisplay',
		position: 'bottom_bar',	// This can be any of the regions. Best results in bottom_bar or top_bar (if clear of calender and weather modules) regions.
		header: 'MMM-HTTPRequestDisplay', // This is optional
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>httpRequestURL</code></td>
			<td>Your target URL for the HTTP Request.<br>
				<br><b>i.e :</b> <code>"http://api.openweathermap.org/data/2.5/weather?q=London,uk&mode=xml"</code>
				<br><b>Possible values:</b> <code>string</code>
				<br><b>Default value:</b> <code>none</code>
			</td>
		</tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>The rate (in ms) at which the display will display each node of the response.<br>
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>2500</code>
			</td>
		</tr>
	</tbody>
</table>

## Dependencies
- none

The MIT License (MIT)
=====================

Copyright © 2016 Eunan Camilleri

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
