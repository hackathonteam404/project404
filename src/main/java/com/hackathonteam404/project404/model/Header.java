package com.hackathonteam404.project404.model;


import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModelProperty;

/**
 * Header
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.java.JavaClientCodegen", date = "2018-12-19T10:49:03.812+05:30[Asia/Kolkata]")
public class Header {


    @JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
    @JsonProperty("messageDateTime")
    private String messageDateTime = null;


    @JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
    @JsonProperty("startIndex")
    private Integer startIndex = null;


    @JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
    @JsonProperty("requestMessageId")
    private String requestMessageId = null;

    public Header messageDateTime(String messageDateTime) {
        this.messageDateTime = messageDateTime;
        return this;
    }


    /**
     * Date and time at which Request is sent (up to milliseconds in UTC). Ex: 2008-09-19T00:00:00.000
     * @return messageDateTime
     **/
    @ApiModelProperty(value = "Date and time at which Request is sent (up to milliseconds in UTC). Ex: 2008-09-19T00:00:00.000")
    public String getMessageDateTime() {
        return messageDateTime;
    }
    public void setMessageDateTime(String messageDateTime) {
        this.messageDateTime = messageDateTime;
    }

    public Header startIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }


    /**
     * Records displayed start at the defined number (Defaulted to 0 if not provided in request)
     * @return startIndex
     **/
    @ApiModelProperty(value = "Records displayed start at the defined number (Defaulted to 0 if not provided in request)")
    public Integer getStartIndex() {
        return startIndex;
    }
    public void setStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
    }

    public Header requestMessageId(String requestMessageId) {
        this.requestMessageId = requestMessageId;
        return this;
    }


    /**
     * A string which uniquely identifies the service request. Requesting application need to create this unique message Id
     * @return requestMessageId
     **/
    @ApiModelProperty(value = "A string which uniquely identifies the service request. Requesting application need to create this unique message Id")
    public String getRequestMessageId() {
        return requestMessageId;
    }
    public void setRequestMessageId(String requestMessageId) {
        this.requestMessageId = requestMessageId;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Header header = (Header) o;
        return Objects.equals(this.messageDateTime, header.messageDateTime) &&
                Objects.equals(this.startIndex, header.startIndex) &&
                Objects.equals(this.requestMessageId, header.requestMessageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(messageDateTime, startIndex, requestMessageId);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Header {\n");

        sb.append("    messageDateTime: ").append(toIndentedString(messageDateTime)).append("\n");
        sb.append("    startIndex: ").append(toIndentedString(startIndex)).append("\n");
        sb.append("    requestMessageId: ").append(toIndentedString(requestMessageId)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }


}




