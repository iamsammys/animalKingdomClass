#!/usr/bin/env node
/**
 * Module for the reptilia kingdom
 * Created by:
 *      Samuel Ezeh
 * */

const baseKingdom = require('./baseKingdom');

class reptilia extends baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species, habitat, diet, legs) {
        super(name, phylum, classs, order, family, genus, species);
        this.habitat = habitat;
        this.diet = diet;
        this.legs = legs;
    }

    // Method to display the classification of the animal
    displayClassification() {
        super.displayClassification();
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Diet: ${this.diet}`);
        console.log(`Legs: ${this.legs}`);
        console.log('\n');
    }

    baskInSun() {
        console.log(`${this.name} is basking in the sun.`);
    }

    crawl() {
        console.log(`${this.name} is crawling.`);
    }
}