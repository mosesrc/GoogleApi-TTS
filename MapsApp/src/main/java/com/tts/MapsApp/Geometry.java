package com.tts.MapsApp;

import lombok.Data;

@Data
public class Geometry {
	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	private Location location;
}
