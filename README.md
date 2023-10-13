# Cypress.js test suite for MaPS

Available for all projects, including MoneyHelper Core, DTT and MaPS corporate.

## Prerequisites 

- Install and Setup Node.js from [here](https://nodejs.org/en)

## Setup

- Clone this repo: ``git clone https://github.com/johnplayer1982/maps-cypress-js.git``
- cd into the project: ``cd path/to/maps-cypress-js``
- Install dependencies: ``yarn``

## Running tests

- Run headless: ``yarn cypress run``
- Run app: ``yarn cypress open``

## Running on Github

The github action is already set up, however there is a current unknown around the environment varibles for local vs running on github.

For example the ``/cypress/e2e/maps.cy.js`` test includes the baseurl for that site: ``const mapsBaseUrl = 'https://qa.maps.org.uk'``, however the line above this (commented out) uses the github environment variable, comment the local baseurl and uncomment the github env var if you want to change the environment on github (eg.. qa, staging, production).

This is pending further investigation.
