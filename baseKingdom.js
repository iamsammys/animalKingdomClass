#!/usr/bin/env node
/**
 * Module for the base kingdom
 * Created by:
 *      Samuel Ezeh
 * */

class baseKingdom {
    constructor(name, phylum, classs, order, family, genus, species) {
        this.name = name;
        this.kingdom = 'Animalia';
        this.phylum = phylum;
        this.classs = classs;
        this.order = order;
        this.family = family;
        this.genus = genus;
        this.species = species;
    }

    // Method to display the classification of the animal
    displayClassification() {
        console.log(`Classification for ${this.name}:`);
        console.log(`Phylum: ${this.phylum}`);
        console.log(`Class: ${this.classs}`);
        console.log(`Order: ${this.order}`);
        console.log(`Family: ${this.family}`);
        console.log(`Genus: ${this.genus}`);
        console.log(`Species: ${this.species}`);
        console.log('\n');
    }
}