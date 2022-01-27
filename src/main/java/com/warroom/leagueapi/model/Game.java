package com.warroom.leagueapi.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

    private String weather;

    private String location;

    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date;


    public Game() {

    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public String getLocation() {
        return location;
    }

    public String getWeather() {
        return weather;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

}
