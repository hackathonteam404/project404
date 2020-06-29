package com.hackathonteam404.project404.APIs;

import com.sun.tools.javac.util.Pair;
import org.json.JSONException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;

public class GoogleMapsApis {

    final static String apiKey = "AIzaSyBxHbdKZ69w3jqJh8jocXWwEMXH3wmil94";

    /**
     * GetLatLongFromZipCode is used to get an exact geographic location from a zip code
     * @param zipcode
     * @return Pair containing both Latitude and Longitude
     * @throws IOException
     * @throws JSONException
     */
    public static Pair<Double, Double> GetLatLongFromZipCode(int zipcode) throws IOException, JSONException {
        String json = NetworkConnector.GetUrlRequest("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=" + apiKey).toString();
        int indexOfLongStart = json.indexOf("lng") + 5;
        int indexOfLongEnd = indexOfLongStart + 10;
        int indexOfLatStart = json.indexOf("lat") + 5;
        int indexOfLatEnd = indexOfLatStart + 10;
        return new Pair(json.substring(indexOfLongStart, indexOfLongEnd), json.substring(indexOfLatStart, indexOfLatEnd));
    }

    /**
     * GetLocationSearch is used to retrieve Google merchant search results based on location
     * @param latitude
     * @param longitude
     * @param radius in meters of area to scan
     * @param type of merchant ex. restaurant
     * @return List of Pairs containing both Merchant Name and Merchant Address
     * @throws IOException
     * @throws JSONException
     */
    public static ArrayList<Pair<String,String>> GetLocationSearch(double latitude, double longitude, int radius, String type) throws IOException, JSONException {
        ArrayList<Pair<String,String>> results = new ArrayList<>();
        String json = NetworkConnector.GetUrlRequest("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
                + latitude + "," + longitude + "&radius=" + radius + "&type=" + type + "&key=" +
                apiKey).toString();
        String[] names = json.split("name");

        for (int i = 1; i < names.length; i++) {
            int indexOfNameStart = 3;
            int indexOfNameEnd = names[i].indexOf(",") - 1;
            int indexOfAddressStart = names[i].indexOf("vicinity") + 11;
            int indexOfAddressEnd = names[i].indexOf(",\"id") - 1;
            String n = names[i].substring(indexOfNameStart, indexOfNameEnd);
            String a = names[i].substring(indexOfAddressStart, indexOfAddressEnd);
            Pair<String, String> result = new Pair<String, String>(n, a);
            results.add(result);
        }
        return results;
    }
}

