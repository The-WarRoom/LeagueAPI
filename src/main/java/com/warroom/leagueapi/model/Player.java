package com.warroom.leagueapi.model;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String first_name;

    private String last_Name;

    private String position;

    private String college;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    public Player() {

    }

    public long getId() {
        return id;
    }

    public String getCollege() {
        return college;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public String getPosition() {
        return position;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_Name(String last_Name) {
        this.last_Name = last_Name;
    }

    public void setPosition(String position) {
        this.position = position;
    }

}
