package com.warroom.leagueapi.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "stats")
public class FantasyStat {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //Passing instances
    private double passingAttempts;

    private double passingYardsPerAttempt;

    private int passingCompletions;

    private double passingYardsPerCompletion;

    private double passingYards;

    private int passingTD;

    private int passingINT;

    private int passing2pt;

    //Rushing Instances
    private double rushingAttempts;

    private double rushingYardsPerAttempt;

    private double rushYards;

    private int rushTD;

    private int rush2pt;

    //Receiving Instances
    private double receivingTargets;

    private int receptions;

    private double receivingYards;

    private double receivingYardsPerReception;

    private int receivingTD;

    private int fumbles;

    //Kicking Instances
    private int extraPointMade;

    private int fieldGoalsMade;

    private int fieldGoalsMade0to19;

    private int fieldGoalsMade20to29;

    private int fieldGoalsMade30to39;

    private int fieldGoalsMade40to49;

    private int fieldGoalsMade50Plus;

    @ManyToMany
    @JoinTable(
            name = "player_stat",
            joinColumns = {@JoinColumn(name = "stat_id")},
            inverseJoinColumns = {@JoinColumn(name = "player_id")}
    )
    private List<Player> players;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getPassingAttempts() {
        return passingAttempts;
    }

    public void setPassingAttempts(double passingAttempts) {
        this.passingAttempts = passingAttempts;
    }

    public double getPassingYardsPerAttempt() {
        return passingYardsPerAttempt;
    }

    public void setPassingYardsPerAttempt(double passingYardsPerAttempt) {
        this.passingYardsPerAttempt = passingYardsPerAttempt;
    }

    public int getPassingCompletions() {
        return passingCompletions;
    }

    public void setPassingCompletions(int passingCompletions) {
        this.passingCompletions = passingCompletions;
    }

    public double getPassingYardsPerCompletion() {
        return passingYardsPerCompletion;
    }

    public void setPassingYardsPerCompletion(double passingYardsPerCompletion) {
        this.passingYardsPerCompletion = passingYardsPerCompletion;
    }

    public double getPassingYards() {
        return passingYards;
    }

    public void setPassingYards(double passingYards) {
        this.passingYards = passingYards;
    }

    public int getPassingTD() {
        return passingTD;
    }

    public void setPassingTD(int passingTD) {
        this.passingTD = passingTD;
    }

    public int getPassingINT() {
        return passingINT;
    }

    public void setPassingINT(int passingINT) {
        this.passingINT = passingINT;
    }

    public int getPassing2pt() {
        return passing2pt;
    }

    public void setPassing2pt(int passing2pt) {
        this.passing2pt = passing2pt;
    }

    public double getRushingAttempts() {
        return rushingAttempts;
    }

    public void setRushingAttempts(double rushingAttempts) {
        this.rushingAttempts = rushingAttempts;
    }

    public double getRushingYardsPerAttempt() {
        return rushingYardsPerAttempt;
    }

    public void setRushingYardsPerAttempt(double rushingYardsPerAttempt) {
        this.rushingYardsPerAttempt = rushingYardsPerAttempt;
    }

    public double getRushYards() {
        return rushYards;
    }

    public void setRushYards(double rushYards) {
        this.rushYards = rushYards;
    }

    public int getRushTD() {
        return rushTD;
    }

    public void setRushTD(int rushTD) {
        this.rushTD = rushTD;
    }

    public int getRush2pt() {
        return rush2pt;
    }

    public void setRush2pt(int rush2pt) {
        this.rush2pt = rush2pt;
    }

    public double getReceivingTargets() {
        return receivingTargets;
    }

    public void setReceivingTargets(double receivingTargets) {
        this.receivingTargets = receivingTargets;
    }

    public int getReceptions() {
        return receptions;
    }

    public void setReceptions(int receptions) {
        this.receptions = receptions;
    }

    public double getReceivingYards() {
        return receivingYards;
    }

    public void setReceivingYards(double receivingYards) {
        this.receivingYards = receivingYards;
    }

    public double getReceivingYardsPerReception() {
        return receivingYardsPerReception;
    }

    public void setReceivingYardsPerReception(double receivingYardsPerReception) {
        this.receivingYardsPerReception = receivingYardsPerReception;
    }

    public int getReceivingTD() {
        return receivingTD;
    }

    public void setReceivingTD(int receivingTD) {
        this.receivingTD = receivingTD;
    }

    public int getFumbles() {
        return fumbles;
    }

    public void setFumbles(int fumbles) {
        this.fumbles = fumbles;
    }

    public int getExtraPointMade() {
        return extraPointMade;
    }

    public void setExtraPointMade(int extraPointMade) {
        this.extraPointMade = extraPointMade;
    }

    public int getFieldGoalsMade() {
        return fieldGoalsMade;
    }

    public void setFieldGoalsMade(int fieldGoalsMade) {
        this.fieldGoalsMade = fieldGoalsMade;
    }

    public int getFieldGoalsMade0to19() {
        return fieldGoalsMade0to19;
    }

    public void setFieldGoalsMade0to19(int fieldGoalsMade0to19) {
        this.fieldGoalsMade0to19 = fieldGoalsMade0to19;
    }

    public int getFieldGoalsMade20to29() {
        return fieldGoalsMade20to29;
    }

    public void setFieldGoalsMade20to29(int fieldGoalsMade20to29) {
        this.fieldGoalsMade20to29 = fieldGoalsMade20to29;
    }

    public int getFieldGoalsMade30to39() {
        return fieldGoalsMade30to39;
    }

    public void setFieldGoalsMade30to39(int fieldGoalsMade30to39) {
        this.fieldGoalsMade30to39 = fieldGoalsMade30to39;
    }

    public int getFieldGoalsMade40to49() {
        return fieldGoalsMade40to49;
    }

    public void setFieldGoalsMade40to49(int fieldGoalsMade40to49) {
        this.fieldGoalsMade40to49 = fieldGoalsMade40to49;
    }

    public int getFieldGoalsMade50Plus() {
        return fieldGoalsMade50Plus;
    }

    public void setFieldGoalsMade50Plus(int fieldGoalsMade50Plus) {
        this.fieldGoalsMade50Plus = fieldGoalsMade50Plus;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
