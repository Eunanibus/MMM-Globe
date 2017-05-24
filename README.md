# MMM-Globe
This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It displays a rotating globe constructed of Hexadecimal shapes specifically formatted to look great on a Magic Mirror.
Extensive thanks and gratitude to the globe object's original creator <a href="https://www.robscanlon.com">Rob Scanlon</a> for all his help and support.

<img src="http://i.imgur.com/3VAToUR.png">

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/Eunanibus/MMM-Globe`. A new folder will appear.
2. Add it to the modules array in the `config/config.js` (see next step below)

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Globe',
		position: 'lower_third',	// This can be any of the regions. Best results in lower_third
		config: {
                size:"medium", // Globe size. See configuration options below for more options
                dayLength: 38, // (Optional) Rotation speed. See configuration options below
                viewAngle: 15, // (Optional) Globe tilt. See configuration options below.
                locations: [ 
                    // Fill with location Objects if desired
                    // e.g.
                    // {lat:37.77493,lng:-122.41942, label: "San Francisco"},
                    // {lat:-23.5475,lng:-46.63611, label: "Sao Paulo"}
                    
                    // Individual values must be seperated by a comma. 
                    // You can look up the latitude and longitude for a specific location on Google Maps.
                ]
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>size</code></td>
			<td>The size you'd like your globe.<br>
				<br><b>i.e :</b> <code>medium</code>
				<br><b>Possible values:</b> <code>x-small</code> <code>small</code> <code>medium</code> <code>large</code> <code>x-large</code>
				<br><b>Default value:</b> <code>medium</code>
			</td>
		</tr>
		<tr>
            <td><code>locations</code></td>
            <td>(Optional)An array of Location objects. These will construct the pins within your globe:. Each value must be seperated within the array by a comma.
            <p><p><code>{lat: latitudeValue , lng: longitudeValue, label:"Label Value"}</code><br>
                <br><b>i.e :</b> <code> [{lat:37.77493,lng:-122.41942, label: "San Francisco"}]</code>
                <br><b>Default value:</b> A default array of locations will be provided if none is specified. Leave blank if default locations are OK.
            </td>
        </tr>
        <tr>
            <td><code>dayLength</code></td>
            <td>(Optional) The number of seconds for the globe to complete a full rotation.</br>
                <b>Possible values:</b> Positive numbers greater than zero.<br />
                <b>Default value:</b> 28
            </td>
        </tr>
        <tr>
            <td><code>viewAngle</code></td>
            <td>(Optional) The angle at which to tilt the globe, measure in degrees. Positive values tilt the globe
                towards the northern hemisphere (Asia, North America, Europe) whilst negative values tilt towards the southern
                hemisphere (Africa, Australia, South America).<br />
                <b>Possible values:</b> Any number between -90 and 90.<br/>
                <b>Default value:</b> 0 (View centered on the equator).
            </td>
        </tr>
	</tbody>
</table>

## Dependencies
- All dependencies in this module are self-regulated

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
