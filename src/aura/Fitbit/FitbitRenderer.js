({
    afterRender :function(component,event,helper){
        var svgGoal = component.find("svg_goal");
        var goalvalue = svgGoal.getElement().innerText;
        goalvalue = goalvalue.replace("<![CDATA[", "").replace("]]>", "");
        svgGoal.getElement().innerHTML = goalvalue;  
        
        var svgFriends = component.find("svg_friends");
        var Friendsvalue = svgFriends.getElement().innerText;
        Friendsvalue = Friendsvalue.replace("<![CDATA[", "").replace("]]>", "");
        svgFriends.getElement().innerHTML = Friendsvalue; 
        
        var svgbadges = component.find("svg_badges");
        var badgesvalue = svgbadges.getElement().innerText;
        badgesvalue = badgesvalue.replace("<![CDATA[", "").replace("]]>", "");
        svgbadges.getElement().innerHTML = badgesvalue;
        
        var svgtoday = component.find("svg_today");
        var todayvalue = svgtoday.getElement().innerText;
        todayvalue = todayvalue.replace("<![CDATA[", "").replace("]]>", "");
        svgtoday.getElement().innerHTML = todayvalue;  
    }
})