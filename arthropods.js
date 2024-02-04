#!/usr/bin/env node
/**
 * Module for the arthropods kingdom
 * Created by:
 *      Samuel Ezeh
 * */

const baseKingdom = require('./baseKingdom');

class arthropods extends baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species, habitat, diet, legs) {
        super(name, phylum, classs, order, family, genus, species);
        this.habitat = habitat;
        this.diet = diet;
        this.legs = true;
        this.molt = true;
    }

    // Method to display the classification of the animal
    displayClassification() {
        super.displayClassification();
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Diet: ${this.diet}`);
        console.log(`Legs: ${this.legs}`);
        console.log('\n');
    }

    crawl() {
        console.log(`${this.name} is crawling.`);
    }

    molt() {
        console.log(`${this.name} is molting.`);
    }
}