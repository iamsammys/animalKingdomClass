#!/usr/bin/env node
/**
 * Module for the amphibians kingdom
 * Created by:
 *      Samuel Ezeh
 * */

const baseKingdom = require('./baseKingdom');

class amphibians extends baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species, habitat, diet, legs) {
        super(name, phylum, classs, order, family, genus, species);
        this.habitat = habitat;
        this.diet = diet;
        this.legs = true;
        this.metamorphosis = true;
    }

    // Method to display the classification of the animal
    displayClassification() {
        super.displayClassification();
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Diet: ${this.diet}`);
        console.log(`Legs: ${this.legs}`);
        console.log('\n');
    }

    jump() {
        console.log(`${this.name} is jumping.`);
    }
}