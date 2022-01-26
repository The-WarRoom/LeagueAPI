package com.warroom.leagueapi.model;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;



@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String division;

    private String conference;

    private String city;

    @OneToMany(mappedBy = "team")
    private List<Player> players;




    public Team() {

    }

    public long getId() {
        return id;
    }

    public String getConference() {
        return conference;
    }

    public String getCity() {
        return city;
    }

    public String getDivision() {
        return division;
    }

    public String getName() {
        return name;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setConference(String conference) {
        this.conference = conference;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
