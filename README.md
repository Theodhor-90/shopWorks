# ShopWorks technical React test

This project is part of the WorkShops technical test

## Purpose of the project

This project is meant to showcase React state-management skills.\
Given a template that simulates an API call, the developer should iterate through it to display some questions via a form,
and create some fields to collect feedback. 

The feedback is collected via text-inputs and select options.\
The data collected must be stored in the local state of the application.

## How to run the application
From terminal, locate to the project's root folder and run the comand: `npm start` or `yarn start`.\
Be aware that you may have to install the required node modules by running `npm install` or `yarn install`.

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

You can also check it out remotely via [sandbox](https://li65wv.csb.app/)

## Expected output
Open the developer's tools in your browser and go to the `CONSOLE` tab.\
Answer the questions of the form by filling the required fields.

Once you completed the questions, hit the `SUBMIT` button.\
You can notice that your answers are printed on the console.

## Exceptions
If there are empty fields after you submit the form, they will be marked in red.\
Your answers will be printed anyway and the empty fields will be empty strings.

There is room to add more error-handling and form-validation logic.

## Possible improvements
The app is responsive only on desktop and tablet screen sizes.\
Adding mobile responsiveness is definitely a good improvement.

Also the styling of the components is basic, leaving room to aesthetic improvements.\


