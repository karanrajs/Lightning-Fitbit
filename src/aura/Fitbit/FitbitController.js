({   
    doInit : function(component,event,helper){
        helper.getFitbitData(component,helper);
        helper.getTodaySummary(component,helper);
        helper.getFriendsDetails(component,helper);
        helper.getmyBadges(component,helper);
    },
    showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },   
    hideSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : false });
        evt.fire();    
    }    
})