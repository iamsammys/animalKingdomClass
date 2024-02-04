#!/usr/bin/env node
/**
 * Module for the aves kingdom
 * Created by:
 *      Samuel Ezeh
 * */

const baseKingdom = require('./baseKingdom');

class aves extends baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species, habitat, diet, flight) {
        super(name, phylum, classs, order, family, genus, species);
        this.habitat = habitat;
        this.diet = diet;
        this.flight = true;
    }

    // Method to display the classification of the animal
    displayClassification() {
        super.displayClassification();
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Diet: ${this.diet}`);
        console.log(`Flight: ${this.flight}`);
        console.log('\n');
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }

    layEggs() {
        console.log(`${this.name} is laying eggs.`);
    }
}