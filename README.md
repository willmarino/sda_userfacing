# Stock Data Analysis Overview

Hello, and welcome to the github page for my most recent project, an analysis of stock market data via the TD Ameritrade API. I began this project as a way to both start learning how to interact with real-world, real-time data, and get my feet wet working with financial information.
<br>

The goal of the project, which is overly ambitious by design, is to be able to make an accurate prediction at time T, about a particular stock's price at time T + 10 seconds. This is obviously a bit of a philosopher's stone, and I know this program will most likely never reach a level of precision which would enable it to be used to actually trade on the market. However, I chose this goal because I wanted to work on something which would force me to learn more about the stock market and data analysis via machine learning, as these are two subjects in which I am heavily interested.

I am currently studying:
<br>
[<ins>Hands-On Machine Learning with Scikit-Learn & TensorFlow</ins>](https://www.amazon.com/gp/product/1491962291/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
<br>
[<ins>Trading and Exchanges - Market Microstructure for Practitioners (outdated but useful)</ins>](https://www.amazon.com/Trading-Exchanges-Market-Microstructure-Practitioners/dp/0195144708)

There are several components to this project, each of which demands their own full explanation, but I will give a quick overview here.

## Servers/Components
[**Websocket Client (Node Server A)**](www.google.com) - This node.js server is responsible for interacting directly with a websocket server hosted by TD Ameritrade. This server cleans the data it receives, sends it to my Data Analyzer, awaits the return values of the analysis, and saves all of that information to my MongoDB database.
<br>

[**Authentication Microservice (Node Server B)**](www.google.com) - This node.js server is responsible for handling all auth protocols necessary for interactions with the TD Ameritrade API. Putting this code in its own process/server made my code in the Websocket Client substantially simpler. It is isolated from my other servers, and only interacts with TD Ameritrade, and my MongoDB Database.
<br>

[**Data Analyzer (Flask Server A)**](www.google.com) - This flask server receives information from Node Server A, uses Pandas and Numpy to further clean it, manipulate it, and organize into a structure which I am able to feed to my learning model, which is currently just a multiple linear regression. I go more into the reasons for this in Data Analyzer's readme.
<br>

[**User Interface (Node Server C)**](www.google.com) - This Node/React backend/frontend combination is the portion of this system which is accessible to anyone, via the internet. It includes an about page with an explanation of the project, and a graph which displays the results of my analysis. During market hours for the NASDAQ, which are 9:30 EST - 4:30 EST, the graph displays the real-time predictions my learning model makes about the price at t + 10 seconds contrasted with the actual price at that time. (Predictions are therefore 10 seconds old.)
