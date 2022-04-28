const express = require("express");
//helmet goes here
const helmet = require("helmet");
const app = express();

app.use(helmet());

//hides the x-powered by header to prevent hackers from exploiting the known vulnerablities in Express/Node
app.use(helmet.hidePoweredBy());
