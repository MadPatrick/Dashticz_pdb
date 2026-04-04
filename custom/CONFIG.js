var config = {}
config['domoticz_ip'] = 'http://192.168.1.5:8080';
config['theme'] = 'default';
config['login_timeout'] = '720';
config['loginEnabled'] = 'false';
config['client_id'] = 'Dashticz';
config['client_secret'] = 'DashticzPassword';
config['app_title'] = 'Brabander';
config['enable_websocket'] = true;
config['room_plan'] = '0';
config['domoticz_refresh'] = '10';
config['dashticz_refresh'] = '1800';
config['use_cors'] = 0;
config['default_cors_url'] = '';
config['dashticz_php_path'] = './vendor/dashticz/';
config['standby_after'] = '1';
config['background_image'] = 'bg11.jpg';
config['start_page'] = '1';
config['enable_swiper'] = '1';
//config['swiper_touch_move'] = '0';
config['vertical_scroll'] = '0';
config['auto_swipe_back_to'] = '1';
config['auto_swipe_back_after'] = '120';
config['auto_slide_pages'] = '';
config['slide_effect'] = 'fade';
config['standard_graph'] = 'day';
config['blink_color'] = '255, 255, 255, 1';
config['language'] = 'nl_NL';
config['timeformat'] = 'DD-MM-YY HH:mm';
config['calendarformat'] = 'dd DD.MM HH:mm';
config['calendarlanguage'] = 'nl_NL';
config['calendarurl'] = '';
config['speak_lang'] = 'nl-NL';
config['owm_provider'] ='owm3'; // with or without it works the same
config['owm_api'] = '770eb5b8e079a3be4baf2ff3acdd2c62';
config['owm_city'] = 'Hellevoetsluis';
config['owm_name'] = 'Hellevoetsluis';
config['owm_country'] = 'nl';
config['owm_lang'] = 'nl';
config['owm_cnt'] = '4';
config['owm_days'] = 1;
config['owm_min'] = 1;
config['static_weathericons'] = 0;
config['setpoint_min'] = '5';
config['setpoint_max'] = '30';
config['disable_update_check'] = 0;
config['no_rgb'] = 0;
config['auto_positioning'] = 0;
config['use_favorites'] = 0;
config['disable_googleanalytics'] = 1;
config['last_update'] = 0;
config['hide_topbar'] = 1;
config['security_button_icons'] = 0;
config['security_panel_lock'] = 0;
config['edit_mode'] = 0;
config['hide_seconds'] = 0;
config['hide_seconds_stationclock'] = 0;
config['use_fahrenheit'] = 0;
config['use_beaufort'] = 0;
config['translate_windspeed'] = 1;
config['hide_mediaplayer'] = 0;
config['batteryThreshold'] = 30;


// --------------------------------------------------------------------------------------------
// Garbage Collector
// --------------------------------------------------------------------------------------------
config['garbage_mapping'] = {
    rest: ['grof', 'grey', 'rest', 'grijs','grijze'],
    gft: ['gft', 'tuin', 'refuse bin', 'green', 'groen', 'Biodégradables', 'snoei'],
    pmd: ['plastic', 'pmd', 'verpakking', 'kunststof', 'valorlux'],
    papier: ['papier', 'blauw', 'blue', 'recycling bin collection'],
    kca: ['chemisch', 'kca','kga'],
    brown: ['brown', 'verre'],
    black: ['black', 'zwart'],
    milieu: ['milieu'],
    kerstboom: ['kerst'],
};

config['garbage'] = {
	gft: 		{kliko: 'green', code: '#FFFF00', name: 'GFT afval ', icon: 'img/garbage/kliko_blue.png'},
	rest: 		{kliko: 'grey', code: '#FFFF00', name: 'Restafval ', icon: 'img/garbage/kliko_blue.png'},
	papier: 	{kliko: 'blue', code: '#FFFF00', name: 'Papier ', icon: 'img/garbage/kliko_blue.png'},
	kerstboom: 	{kliko: 'green', code: '#5bff00', name: 'Kerstboom', icon: 'img/garbage/tree.png'},
	}

var buttons = {}

buttons.slidehome 	= {
	key: "Home",
	width: 12, 
	title:"Home Screen",
	slide:1, 
	icon: 'fas fa-home'}

// -----------------------------------------------------------------------
// SHORTCUTS
// -----------------------------------------------------------------------
var gr_tuin		='s1'
var gr_kamer		='s2'

// -------------------------------------------------------------------------------
// FRAMES
// -------------------------------------------------------------------------------
var frames = {}
frames.lms = {frameurl:"http://192.168.1.6:9000",  height: '540',scrollbars : false,  width:12}

// -------------------------------------------------------------------------------
// TITLE BLOCKS
// -------------------------------------------------------------------------------
var blocks = {}
blocks['Title_Lichtschakelaars']= {width: 12,type: 'blocktitle',title: 'Schakelaars',image : 'patrick/blue_switch-off.png'}
blocks['Title_Dials']		= {width:  4,type: 'blocktitle',title: 'Functies',image : 'patrick/blue_switch-off.png'}
blocks['Title_Garbage']		= {width: 12,type: 'blocktitle',title: 'Afval',image : 'patrick/garbage.png'}
blocks['miniclock'] 		= {width: 8};

// --------------------------------------------------------------------------------------------
// BLOCKS 
// --------------------------------------------------------------------------------------------
blocks[gr_tuin] 		= {width: 2, hide_data : true, last_update : false, image: 'patrick/blue_garden.png', title:'Tuin'}
blocks[gr_kamer] 		= {width: 2, hide_data : true, last_update : false, image: 'patrick/blue_desk_lamp.png', title:'Kamer'}
blocks['dimmer_hal']	 	= {idx: 154, hide_data : true, last_update : false, image: 'patrick/blue_hal_light.png', title:'Hal', width: 2}
blocks['ventilatie'] 		= {idx: 112, hide_data : true, last_update : false, image: 'patrick/blue_fan.png', title:'Ventilatie', width: 2}
blocks['Slide_1'] 		= {width: 2, hide_data : true, last_update : false, image: 'patrick/blue_blinds.png', title:'Screens',slide:2}
blocks['Slide_2'] 		= {width: 2, hide_data : true, last_update : false, image: 'patrick/blue_speaker_music.png', title:'Muziek' ,slide:3}

blocks['Wnk_Keuken'] 		= {idx: 768, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Wnk Keuken'}
blocks['Wnk_Tuin'] 		= {idx: 64,  width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Wnk Tuin'}
blocks['Wnk_Erker']		= {idx: 69,  width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Wnk Erker'}
blocks['Wnk_Wandspot'] 		= {idx: 1278,width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Wandspot'}
blocks['Wnk_TV'] 		= {idx: 789, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Wnk TV'}
blocks['Wnk_Werkkamer'] 	= {idx: 752, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_smart-light.png', title: 'Werkkamer'}
blocks['Tuin_Garage_Achter'] 	= {idx: 431, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_wall_lamp.png', title: 'Garage - Achter'}
blocks['Garage_Voor'] 		= {idx: 96,  width: 2, hide_data: true, last_update: false, image: 'patrick/blue_wall_lamp.png', title: 'Garage - Voor'}
blocks['Tuin_Voordeur'] 	= {idx: 986, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_wall_lamp.png', title: 'Voordeur'}
blocks['Tuin_Licht'] 		= {idx: 816, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_street_light.png', title: 'Tuin - Lampen'}
blocks['Tuin_Kerstboom'] 	= {idx: 817, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_christmas_tree.png', title: 'Kerstboom'}
blocks['Lux'] 			= {idx: 454, width: 2, hide_data: true, last_update: false, image: 'patrick/blue_pir.png', title: 'Lichtsterkte'}
blocks['Ketel_druk'] 		= {idx: 262, width: 3, hide_data: true, last_update: false, icon: ' ', title: 'Ketel Druk'}

blocks['BMW_klimaat']	 	= {idx: 721,  width: 2, hide_data: true,  last_update: true, image: 'patrick/bmw_logo.png', title: 'Klimaat'}
blocks['BMW_ACLimit']	 	= {idx: 929,  width: 2, hide_data: true,  last_update: true, icon: ' ', title: 'AClimit'}
blocks['BMW_HighLow']	 	= {idx: 931,  width: 2, hide_data: false, last_update: true, image: 'patrick/bmw_logo.png', title: 'Laden (6A)'}
blocks['Mower_select'] 		= {idx: 928,  width: 4, hide_data: false, last_update: false,icon: ' ', title: 'Mower R4-D2'}
blocks['Mower_run'] 		= {idx: 924,  width: 1, hide_data: true,  last_update: false,imageOff: 'patrick/husqvarna_off.png',imageOn: 'patrick/husqvarna_on.png',title: ' '}
blocks['Party_Mode']		= {idx: 464,  width: 2, hide_data: false, last_update: false,image: 'patrick/blue_balloons.png', title: 'Party'}
blocks['Tablet']		= {idx: 1338, width: 2, hide_data: false, last_update: false,imageOff: 'patrick/blue_switch-off.png',imageOn: 'patrick/blue_switch-on.png', title: 'Tablet laden'}
blocks['Badkamer']		= {idx: 1327, width: 3, type: 'thermostat', title: 'Badkamer'};
blocks['Badkamer_modus']	= {idx: 1326, width: 3, type: 'thermostat', title: 'Badkamer',iconOff: ' '};

// --------------------------------------------------------------------------------------------
// Emptyblock Standby Screen Top
// --------------------------------------------------------------------------------------------
blocks['mini'] 			= {idx: 934, width : 4,hide_data : true,image: 'patrick/mini_logo.png',title: 'Mini Cooper E'}
blocks['bmw'] 			= {idx: 684, width : 4,hide_data : true,image: 'patrick/bmw_logo.png',title: 'BMW iX1'}
blocks['deursensor'] 		= {idx: 477, width : 4,hide_data : true,icon: ' ',title: 'Deursensoren'}

blocks['emptyblock4'] 		= {idx: 829, width : 4,hide_data : true,icon: ' ',title: '4 '}
blocks['emptyblock5'] 		= {idx: 532, width : 4,hide_data : true,icon: ' ',title: 'Ventilatie'}
blocks['emptyblock6'] 		= {idx: 262, width : 4,hide_data : true,icon: ' ',title: 'Keteldruk'}
blocks['Mower_State'] 		= {idx: 923, width : 4,hide_data : true,image: 'patrick/mower.png',title: 'Husqvarna'}

blocks['myclock'] 		= {type: 'haymanclock',width: 12}

blocks['lms_play'] 		= {idx: 1481, width : 3,iconOff: ' ',imageOn: 'patrick/blue_speaker_music.png',title: 'Squeezebox'}
blocks['lms_volume'] 		= {idx: 1482, width : 4,icon: ' ',title: 'LMS Volume'}
blocks['lms_standby'] 		= {idx: 1483, width : 4,iconOff: ' '}
blocks['lms_playlist'] 		= {idx: 1487, width : 3,icon: ' ',default: 1,title: 'LMS Playlist'}
blocks['lms_favorite'] 		= {idx: 1488, width : 3,icon: ' ',default: 1,title: 'LMS Favorites'}

// --------------------------------------------------------------------------------------------
//Buienradar (text)
// --------------------------------------------------------------------------------------------
blocks['regen'] 		= {idx: 444, width: 6, title: 'Buienradar', switch: true, image: ' '}

// --------------------------------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------------------------------
blocks['Somfy_woonkamer'] 	= {idx: 492, width: 4, title: 'Woonkamer'}
blocks['Somfy_blok1'] 		= {idx: 493, width: 4, title: 'Erker Blok 1'}
blocks['Somfy_blok2'] 		= {idx: 494, width: 4, title: 'Erker Blok 2'}

blocks['Erker_1'] 		= {idx: 607, width: 6, hide_stop: false,title: 'Erker_1',hide_data : true}
blocks['Erker_2'] 		= {idx: 610, width: 6, hide_stop: false,title: 'Erker_2',hide_data : true}
blocks['Erker_3'] 		= {idx: 606, width: 6, hide_stop: false,title: 'Erker_3',hide_data : true}
blocks['Erker_4'] 		= {idx: 609, width: 6, hide_stop: false,title: 'Erker_4',hide_data : true}
blocks['Erker_5'] 		= {idx: 611, width: 6, hide_stop: false,title: 'Erker_5',hide_data : true}
blocks['Erker_Deur'] 		= {idx: 605, width: 6, hide_stop: false,title: 'Deur',hide_data : true}
blocks['Wnk_klein'] 		= {idx: 612, width: 6, hide_stop: false,title: 'Wnk_Klein',hide_data : true}
blocks['Wnk_groot'] 		= {idx: 603, width: 6, hide_stop: false,title: 'Wnk_Groot',hide_data : true}
blocks['Slaapkamer'] 		= {idx: 604, width: 6, hide_stop: false,title: 'Slaapkamer',hide_data : true}
blocks['Thomas_1'] 		= {idx: 608, width: 6, hide_stop: false,title: 'Thomas_1',hide_data : true}
blocks['Thomas_2'] 		= {idx: 613, width: 6, hide_stop: false,title: 'Thomas_2',hide_data : true}

// --------------------------------------------------------------------------------------------
// Garbage
// --------------------------------------------------------------------------------------------

blocks['mygarbage'] = {
	company		: 'afvalinfo',
	zipcode		: '3221LW',
	housenumber	: 18,
	maxitems	: 4,
	width		: 12,
	hideicon	: 0,
	icon_use_colors	: 1,
	use_colors	: 1,
	use_names	: 1,
	date_separator	: ':',
	layout		: 1
}

blocks['mygarbage_standby'] = {
	company		: 'afvalinfo',
	zipcode		: '3221LW',
//	street		: 'esplanade',
	housenumber	: 18,
	maxitems	: 1,
	width		: 4,
	hideicon	: 1,
	icon_use_colors	: 1,
	use_colors	: 1,
	use_names	: 1,
	layout		: 0
}

blocks['weather_standby'] = {
	type: 'weather',
	apikey: '770eb5b8e079a3be4baf2ff3acdd2c62',
	provider: 'owm3',
	layout: 2,
	width : 6,
	name:' ',
	decimals: 1,
	icons: 'meteo',
	refresh: 1800,
    	colors: {
        cloud: 'white',
        light_cloud: 'white',
        dark_cloud: 'lightgray',
    }

}

// --------------------------------------------------------------------------------------------
// columns 
// --------------------------------------------------------------------------------------------
var columns = {}
columns['home1'] 	= {blocks: ['Title_Garbage','mygarbage'], width: 3}
columns['home2'] 	= {blocks: ['Title_Dials','miniclock',gr_tuin,gr_kamer,'dimmer_hal','ventilatie','Slide_1','Slide_2'], width: 9}
columns['home3'] 	= {blocks: ['Title_Lichtschakelaars','Somfy_blok1','Somfy_blok2','Somfy_woonkamer'], width: 12}
columns['home4'] 	= {blocks: ['Wnk_Keuken','Wnk_Tuin','Wnk_Erker','Wnk_Werkkamer','Wnk_TV','Wnk_Wandspot'], width: 12}
columns['home5'] 	= {blocks: ['Garage_Voor','Tuin_Garage_Achter','Tuin_Voordeur','Tuin_Licht','Tuin_Kerstboom','Lux'], width: 12}
columns['home6'] 	= {blocks: ['Party_Mode','Mower_select','lms_play','lms_favorite'], width: 12}
columns['home7'] 	= {blocks: ['Tablet','Badkamer','lms_volume','lms_playlist'], width: 12}

columns['screens_1'] 	= {blocks: ['Erker_1','Erker_2','Erker_3','Erker_4','Erker_5','Erker_Deur'], width: 12}
columns['screens_2'] 	= {blocks: ['Wnk_groot','Wnk_klein','Thomas_1','Thomas_2','Slaapkamer'], width: 12}
columns['screens_3'] 	= {blocks: [buttons.slidehome], width: 12}
columns['lms_1'] 	= {blocks: [frames.lms,buttons.slidehome], width: 12}
columns['test'] 	= {blocks: ['mini','mygarbage_standby','bmw','emptyblock4','emptyblock5','emptyblock6','myclock','weather_standby','regen','deursensor','Mower_State','lms_standby'], width: 12}
columns['hidden'] 	= {blocks: ['Ketel_druk','Mower_run',buttons.slidehome], width: 4}

// --------------------------------------------------------------------------------------------
// SCHERMEN
// --------------------------------------------------------------------------------------------
var screens =	{}
//screens[1]	= {columns: ['test']}
screens[1]	= {columns: ['home1','home2','home3','home4','home5','home6','home7']}
screens[2]	= {columns: ['screens_1','screens_2','screens_3']}
screens[3]	= {columns: ['lms_1']}
screens[4]	= {columns: ['hidden']}

// --------------------------------------------------------------------------------------------
// STANDBY SCREEN
// --------------------------------------------------------------------------------------------

var columns_standby 		= {}
columns_standby[1] 		= {}
columns_standby[1]['blocks'] 	= ['mini','mygarbage_standby','bmw','emptyblock4','emptyblock5','emptyblock6','myclock','regen','weather_standby','deursensor','Mower_State','lms_standby']
columns_standby[1]['width'] 	= 12;