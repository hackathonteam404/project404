package com.hackathonteam404.project404.controller;

import java.util.concurrent.atomic.AtomicLong;

import com.hackathonteam404.project404.model.Greeting;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
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
