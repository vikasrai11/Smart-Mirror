/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
	electronOptions: {
    		webPreferences: {
      			webviewTag: true
    		}
  	},						// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.1/120", "192.168.0.1/24"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/33/781a3953/India_Holidays.ics"
						      
					}
				]
			}
		},
		
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 19.23000000,  
				lon: 72.86000000  
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 19.23000000,
				lon: 72.86000000
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Times of India",
						url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		 {
    			module: "MMM-TomTomCalculateRouteTraffic",
    			position: "top_right",
    			
    			config: {
      				apiTomTomKey: "7AIfoyDX6J66BWN9pUEIp4LJiSpsGVE3",
      				refresh: (5 * 60 * 1000), // in milliseconds
      				animationSpeed: 2000, // in milliseconds
      				size: "medium",
      				routes: [{
        				name: "Borivali",
        				symbol: "city",
        				from: {latitude: 19.295233, longitude: 72.854393},
        				to: {latitude: 19.228825, longitude: 72.854118}
     				}, {
        		
      			}]
    			}
  		 },
		 //{
    			//module: 'MMM-Remote-Control',
    			// uncomment the following line to show the URL of the remote control on the mirror
    			//position: 'bottom_left',
    			// you can hide this module afterwards from the remote control itself
    			//config: {
        			//customCommand: {},  // Optional, See "Using Custom Commands" below
        			//showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        			//secureEndpoints: true, // Optional, See API/README.md
        			// uncomment any of the lines below if you're gonna use it
        			// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        			// apiKey: "", // Optional, See API/README.md for details
        			// classes: {} // Optional, See "Custom Classes" below
    				//}
		 //},
		 {
    			module: 'MMM-CricketScores',
    			position: 'bottom_right',
    			config:{
        			category: "cricket",
        			numberOfResults : 1,
        			screenRefreshInterval : 10,
        			focusTeam: "India",
        			apiKey: '90d4e86645mshdf85a2a43687239p1231cbjsn8708163e5ab5', // refer to the apiKey description to get an apiKey
        			refreshInterval: 90,
				size:"small"
    				}
		 },
		 
		 {
  			module: 'EXT-Alert',
  			config: {
    				debug: false,
    				style: 1,
    				ignore: []
  				}
		 },
		 {
  			module: "EXT-Detector",
  			position: "top_left",
  			config: {
    				debug: false,
    				detectors: [
      					{
        				  detector: "Snowboy",
        				  Model: "jarvis",
        				  Sensitivity: null
      					}
    				      	   ]
  				}
		 },

		 {
  			module: "MMM-GoogleAssistant",
  			configDeepMerge: true,
  			config: {
    				debug: false,
    				stopCommand: "stop",
    				assistantConfig: {
						lang: "en-US",
						latitude: 19.295233,
 						longitude: 72.854393,
						deviceRegistred: false
						},
				responseConfig: {
  					useFullscreen: false,
  					responseOutputCSS: "response_output.css",
  					screenOutputTimer: 5000,
  					useChime: true,
  					confirmationChime: true,
					}
    				}
		 },
		 {
    			module: "MMM-PiTemp",
    			position: "top_left",
    			config: {}
		  },
		 


		//{
    			//module: "MMM-EasyPix",
    			//position: "top_center",
    			//config: {
      				//picName: "standby.gif",            // Enter the picture file name.
      				//maxWidth: "75%",                // Size picture precisely. Retains aspect ratio.
      				//sounds: ["1.mp3", "me2.mp3"],   // mp3 audio file names in quotes seperated by commas for Hello-Lucy
      				//updateInterval: 30 * 60 * 1000, // Updates display (Milliseconds) - Default: 30 * 60 * 1000 = 30 minutes
      				//animationSpeed: 3000,           // Speed of the update animation. (Milliseconds)
      				//}
   		 //},
		//{
			//module: 'MMM-Screencast',
			//position: 'top_center', // This position is for a hidden <div /> and not the screencast window
			//config: {
				//position: 'top_center',
				//height: 500,
				//width: 950
				//}
        	//},
		{
  			module: "EXT-YouTubeCast",
  			position: "top_center", // optional (can be deleted if using fullscreen)
  			config: {
    				debug: false,
    				fullscreen: false,
    				width: "30vw",
    				height: "30vh",
    				alwaysDisplayed: false,
    				castName: "SmartMirror",
    				port: 8569
  				}
		},
		{
  			module: 'EXT-Screen',
  			position: 'top_left',
  			animateIn: "flipInX",
  			animateOut: "flipOutX",
  			config: {
    				debug: false,
    				animateBody: true,
    				autoDimmer: true,
    				delay: 5 * 60 * 1000,
    				mode: 1,
    				xrandrForceRotation: "normal",
    				wrandrForceRotation: "normal",
    				wrandrForceMode: null,
    				displayCounter: true,
    				displayBar: true,
    				displayStyle: "SemiCircle",
    				displayLastPresence: true,
    				lastPresenceTimeFormat: "LL H:mm",
    				displayAvailability: true,
    				detectorSleeping: false,
    				gpio: 4,
  				}
		},
		{
  			module: 'EXT-Pir',
  			config: {
    				debug: false,
    				gpio: 4,
    				mode: 0
  				}
		},
		{
  			module: "EXT-Background",
  			config: {
    				model: "jarvis",
    				myImage: null
  				}
		},
		{
    			module: "MMM-Pure-Snow",
    			position: "fullscreen_below",
    			config: {
      				dataCount: "10",
    				},
  		},
		

		
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
