public class fitbitController {
    
    @AuraEnabled public static string getUserDetails(){
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint('callout:Fitbit/1/user/-/profile.json');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
    
    @AuraEnabled public static string getTodaySummarry(){
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint('callout:Fitbit/1/user/-/activities/date/today.json');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
    
    @AuraEnabled public static string getFriendsList(){
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint('callout:Fitbit/1/user/-/friends/leaderboard.json');
        HttpResponse res = http.send(req);
        system.debug('Friends List'+res.getBody());
        return res.getBody();
    }
    
    @AuraEnabled public static string getMybadges(){
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint('callout:Fitbit/1/user/-/badges.json');
        HttpResponse res = http.send(req);
        system.debug('Friends List'+res.getBody());
        return res.getBody();
    }
}