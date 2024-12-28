package com.krish.ems_backend.exception;

public class ResourceNotFoundException extends RuntimeException{


    public ResourceNotFoundException(String message){

        super(message);
    }
}
