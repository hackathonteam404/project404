package com.hackathonteam404.project404;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Project404Application {

    public static void main(String[] args) {
        SpringApplication.run(Project404Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/greeting").allowedOrigins("http://localhost:3000");
                registry.addMapping("/test").allowedOrigins("http://localhost:3000");
                registry.addMapping("/geocode").allowedOrigins("http://localhost:3000");
                registry.addMapping("/locate").allowedOrigins("http://localhost:3000");

            }
        };
    }

}
