#!/usr/bin/env node
/**
 * Module for the pisces kingdom
 * Created by:
 *      Samuel Ezeh
 * */
const baseKingdom = require('./baseKingdom');

class pisces extends baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species, habitat, diet) {
        super(name, phylum, classs, order, family, genus, species);
        this.habitat = habitat;
        this.diet = diet;
        this.swims = true;
        this.breathesUnderwater = true;
    }

    // Method to display the classification of the animal
    displayClassification() {
        super.displayClassification();
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Diet: ${this.diet}`);
        console.log('\n');
    }

    swim() {
        console.log(`${this.name} is swimming.`);
    }

    breatheUnderwater() {
        console.log(`${this.name} is breathing underwater.`);
    }
}