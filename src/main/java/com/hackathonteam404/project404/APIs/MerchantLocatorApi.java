package com.hackathonteam404.project404.APIs;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hackathonteam404.project404.ApiClient;
import com.hackathonteam404.project404.model.MerchantLocatorpostPayload;
import com.hackathonteam404.project404.model.MerchantLocatorpostResponse;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.threeten.bp.LocalDateTime;
import org.threeten.bp.ZoneId;
import org.threeten.bp.ZonedDateTime;
import org.threeten.bp.format.DateTimeFormatter;
import org.threeten.bp.temporal.ChronoUnit;


@javax.annotation.Generated(value = "io.swagger.codegen.languages.java.JavaClientCodegen", date = "2018-12-19T10:49:03.812+05:30[Asia/Kolkata]")
@Component("com.visa.developer.sample.merchant_locator_api.api.MerchantLocatorApi")

public class MerchantLocatorApi {
    private ApiClient apiClient;

    public MerchantLocatorApi() {
        this(new ApiClient());
        System.out.println("\nProduct Name: Merchant Locator\nApi Name: Merchant Locator API");

        // Configure HTTP basic authorization: basicAuth
        apiClient.setUsername("WP0MYDTXKAEIP59K2A2F21MRNmlFlb2CZx09iE4crN1eWvcoA");
        apiClient.setPassword("RTi3sufGUlqqS0KEmIrf4GNlEsRKH9Bg71");
        apiClient.setKeystorePath("C:\\Users\\Ande404\\Desktop\\Projects\\VISA\\GroupProjectFinal\\project404\\src\\main\\java\\com\\hackathonteam404\\project404myProject_keyAndCertBundle.jks");
        apiClient.setKeystorePassword("password");
        apiClient.setPrivateKeyPassword("password");

        String jsonPayLoad = transformPayload("{\"responseAttrList\": [\"GNLOCATOR\"], \"header\": {\"messageDateTime\": \"2016-04-12T22:41:17.903\", \"startIndex\": \"0\", \"requestMessageId\": \"Request_001\"}, \"searchOptions\": {\"matchScore\": \"true\", \"maxRecords\": \"5\", \"matchIndicators\": \"true\"}, \"searchAttrList\": {\"distance\": \"2\", \"merchantName\": \"Starbucks\", \"longitude\": \"-121.929163\", \"merchantCountryCode\": \"840\", \"distanceUnit\": \"M\", \"latitude\": \"37.363922\"}}");

        //connects to Api then prints results
        connectToAPI(jsonPayLoad);


    }

    public void connectToAPI(String jsonPayLoad){
        ObjectMapper mapper = new ObjectMapper();
        try {
            MerchantLocatorpostPayload body = mapper.readValue(jsonPayLoad, MerchantLocatorpostPayload.class);

            MerchantLocatorpostResponse result = postmerchantLocator(body);
            System.out.println(result);
        } catch (Exception e) {
            System.err.println("Exception when calling MerchantLocatorApi#postmerchantLocator");
            e.printStackTrace();
        }
    }

    @Autowired
    public MerchantLocatorApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     *
     * TBD
     * <p><b>2XX</b> - Successful response object.
     * @param body The body parameter
     * @return MerchantLocatorpostResponse
     * @throws RestClientException if an error occurs while attempting to invoke the API

     */
    // @ResponseStatus(HttpStatus.BAD_REQUEST)
    public MerchantLocatorpostResponse postmerchantLocator(MerchantLocatorpostPayload body) throws RestClientException {
        Object postBody = body;

        // verify the required parameter 'body' is set
        if (body == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'body' when calling postmerchantLocator");
        }

        String path = UriComponentsBuilder.fromPath("/merchantlocator/v1/locator").build().toUriString();
        String resourcePath = UriComponentsBuilder.fromPath("locator").build().toUriString();

        final MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders headerParams = new HttpHeaders();
        final MultiValueMap<String, Object> formParams = new LinkedMultiValueMap<String, Object>();

        final String[] accepts = {
                "application/json"
        };
        final List<MediaType> accept = apiClient.selectHeaderAccept(accepts);
        final String[] contentTypes = {
                "application/json"
        };
        final MediaType contentType = apiClient.selectHeaderContentType(contentTypes);

        String[] authNames = new String[] { "basicAuth" };
        System.out.println("path = " + path +"\nrcs: " + resourcePath);

        ParameterizedTypeReference<MerchantLocatorpostResponse> returnType = new ParameterizedTypeReference<MerchantLocatorpostResponse>() {};

        return apiClient.invokeAPI2(path, resourcePath, HttpMethod.POST, queryParams, postBody, headerParams, formParams, accept, contentType, authNames);
    }

    public String transformPayload(String payload){
        payload = editLocalTime(payload);
        payload = addRandomValue(payload);
        return payload;
    }

    public String editLocalTime(String payload){
        ZoneId zoneId = ZoneId.of("America/Los_Angeles");
        LocalDateTime localDateTime = LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS);
        ZonedDateTime laDateTime = ZonedDateTime.of(localDateTime,zoneId);
        payload = payload.replaceAll("\"localTransactionDateTime\":\\s+\".{19}\"",
                "\"localTransactionDateTime\": \""+ DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(laDateTime)+"\"");
        payload = payload.replaceAll("\"dateTimeLocal\":\\s+\".{10}\"",
                "\"dateTimeLocal\": \""+DateTimeFormatter.ofPattern("MMddHHmmss").format(laDateTime)+"\"");
        return payload;
    }

    public String addRandomValue(String payload){
        String randomAlphaNumericValue = UUID.randomUUID().toString().replaceAll("-","").substring(0,8);
        Random rand = new Random();
        Integer randomNumber = rand.nextInt(90000) + 10000;
        payload = payload.replaceAll("random_string", randomAlphaNumericValue);
        payload = payload.replaceAll("random_integer", randomNumber.toString());
        payload = payload.replaceAll("random", randomAlphaNumericValue);
        return payload;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }



}
