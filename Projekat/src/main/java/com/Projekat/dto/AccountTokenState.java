package com.Projekat.dto;

import com.Projekat.model.users.*;

public class AccountTokenState {

    private String accessToken;
    private Long expiresIn;
    private String role;
    private String lastPasswordResetDate;
    private Admin admin;
    private Instructor instructor;
    private CottageOwner cottageOwner;
    private BoatOwner boatOwner;
    private Client client;
    public AccountTokenState() {
        this.accessToken = null;
        this.expiresIn = null;
        this.role = null;
    }

    public void setUser(User loggedUser) {
        switch (role){
            case "ROLE_ADMIN": {
                this.admin = (Admin) loggedUser;
                break;
            }
            case "ROLE_INSTRUCTOR": {
                this.instructor = (Instructor) loggedUser;
                break;
            }
            case "ROLE_COTTAGEOWNER": {
                this.cottageOwner = (CottageOwner) loggedUser;
                break;
            }
            case "ROLE_BOATOWNER": {
                this.boatOwner = (BoatOwner) loggedUser;
                break;
            }
            case "ROLE_CLIENT": {
                this.client = (Client) loggedUser;
                break;
            }

        }
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public AccountTokenState(String accessToken, long expiresIn, String role) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
        this.role = role;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public Admin getAdmin() {
        return admin;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public CottageOwner getCottageOwner() {
        return cottageOwner;
    }

    public BoatOwner getBoatOwner() {
        return boatOwner;
    }

    public Client getClient() {
        return client;
    }

    public String getLastPasswordResetDate() {
        return lastPasswordResetDate;
    }

    public void setLastPasswordResetDate(String last_password_reset_date) {
        this.lastPasswordResetDate = last_password_reset_date;
    }
}