# Lightning-Fitbit
A Lightning application to integrate with Fitbit device. This simple lightning app will display your daily activities, goals, badges and leaderboard. The UI is designed using Lightning Design System to get the salesforce native Lightning experiences
  ![alt tag](https://raw.github.com/Karanraj/Lightning-Fitbit/master/img/LightningFitbit.png)
## Register Fitbit app
* Go to https://dev.fitbit.com/apps
* Click Register An App and fill all the mandatory fields
* Make sure that you have entered "Client" in the "OAuth 2.0 Application Type"
* Choose the default "access type" as "Read-only", since we are not going to write anything in Fitbit using this application
* Leave the Callback URL as blank, we will add the value after the Step 2
* Click save

  ![alt tag](https://raw.github.com/Karanraj/Lightning-Fitbit/master/img/FitApp.png)

It will display the client Id, consumer key and Authorization URLs for the application, which we will going to use in our next step for the authentication

## Auth.Provider and Named credential

### Auth. Provider:  
Follow the below steps to add Auth.provider for the Fitbit
* Setup > Security > Auth. Providers > Click New
* Select the Provider Type as "Open Id Connect"
* Enter the Name for the Auth. Provider
* In the Consumer Key, copy and paste the OAuth 2.0 client Id from the Fitbit Register App
* In the Consumer secret, copy and paste the Client(consumer) secret from Fitbit registered app
* Add Authorize Endpoint URL as https://www.fitbit.com/oauth2/authorize
* Add Token Endpoint URL as https://api.fitbit.com/oauth2/token
* In the default, scopes add values as "activity profile settings heartrate location nutrition sleep social weight"
* Click Save

Now copy the callback URL from the Auth. Provider and add in the Fitbit registered app callback URL information.
  ![alt tag](https://raw.github.com/Karanraj/Lightning-Fitbit/master/img/AuthProvider.png)

### Name Credential:
Follow the below steps to create named credential

* Goto Setup > Security > Named Credential > Click New
* Enter the Label as "Fitbit" [This name will be used in the code, if you are giving different name make sure to update the apex controller class]
* Enter https://api.fitbit.com/ in the URL
* In the Identity Type select "Named Principle"
  * Note: You can also choose "Per User" in the Identity type if you selected then follow this link to enable this Named credential for the users whom you want to enable.
* Select "OAuth 2.0" in the Authentication Protocol
* In the Authentication Provider click the lookup icon and selected [select or selected] the Auth. provider which we created in the previous step
* Enable the checkbox "Start Authentication Flow on Save"
* Click Save
* Now it will open the Fitbit login page.
* Login with your Fitbit credentials and allow the access

  ![alt tag](https://raw.github.com/Karanraj/Lightning-Fitbit/master/img/NamedCrendential.png)

# Related Resources
* [Fitbit API docs](https://dev.fitbit.com/docs/basics/)
* [Lightning Design system](https://www.lightningdesignsystem.com/)
* [Lightning developer Trailhead Modules](https://developer.salesforce.com/trailhead/trail/lex_dev)
