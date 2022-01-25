package com.warroom.leagueapi.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
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







}
