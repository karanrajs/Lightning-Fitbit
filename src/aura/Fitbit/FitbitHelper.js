({
    getFitbitData : function(component) {
        var action = component.get("c.getUserDetails");
        action.setCallback(this,function(response){
             var state = response.getState();
            if(state === 'SUCCESS'){
                var parseJson = JSON.parse(response.getReturnValue());
            	component.set("v.User",parseJson.user);
             }else if (state === "ERROR") {
                console.log('Error');
            }
        });
        $A.enqueueAction(action);
    },
    getTodaySummary : function(component,helper) {
        var summaryData = component.get("c.getTodaySummarry");
        summaryData.setCallback(this,function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
            	var parseJson = JSON.parse(response.getReturnValue());
            	component.set("v.todayData",parseJson);
            }else if (state === "ERROR"){
                console.log('Error');
            }

        });
        $A.enqueueAction(summaryData);
    },
    getFriendsDetails : function(component,helper){
        var friendsList = component.get("c.getFriendsList");
        friendsList.setCallback(this,function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
            var parseJson = JSON.parse(response.getReturnValue());
            component.set("v.friends",parseJson.friends);
            }else if (state === "ERROR"){
                console.log('Error');
            }
        });
        $A.enqueueAction(friendsList);
    },
    getmyBadges: function(component,helper){
        var badges = component.get("c.getMybadges");
        badges.setCallback(this,function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
            var parseJson = JSON.parse(response.getReturnValue());
            component.set("v.badges",parseJson.badges)
            }else if (state === "ERROR"){
                console.log('Error');
            }
        });
        $A.enqueueAction(badges);
    }
})
