package com.tts.MapsApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {
	MapService mapService = new MapService();
	
	@GetMapping("/home")
	public String getDefaultMap() {
		System.out.println("Made it Here!!!!");
		
		Location location = new Location();
		location.setCity("Dallas");
		location.setState("Texas");
		mapService.addCoordinates(location);
		System.out.println(location);
		
		return "index.html";
	}
}
