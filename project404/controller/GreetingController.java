package com.hackathonteam404.project404.controller;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicLong;

import com.hackathonteam404.project404.APIs.GoogleMapsApis;
import com.hackathonteam404.project404.model.Greeting;
import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    static double latitude = 41.8895288;
    static double longitude = -87.63173159999999;
    static int radiusInMeters = 1500;
    static int zipcode = 1500;
    static String type = "restaurant";

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/geocode")
    public Greeting apiOne(@RequestParam(value = "name", defaultValue = "World") String name) throws IOException, JSONException {
        return new Greeting(counter.incrementAndGet(), GoogleMapsApis.GetLatLongFromZipCode(60607).toString());
    }
    @GetMapping("/locate")
    public Greeting apiTwo(@RequestParam(value = "name", defaultValue = "World") String name) throws IOException, JSONException {
        return new Greeting(counter.incrementAndGet(), GoogleMapsApis.GetLocationSearch(latitude,longitude,radiusInMeters,type).toString());
    }

    @GetMapping("/test")
    public Object testAPI(@RequestParam(value="zip") String zip) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(
                "https://maps.googleapis.com/maps/api/geocode/json?address="
                        + zip
                        + "&key=AIzaSyBxHbdKZ69w3jqJh8jocXWwEMXH3wmil94",
                Object.class);
    }

}
