jQuery("#simulation")
  .on("click", ".s-367da92a-f66c-4a3a-8916-0ca4860482f7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button-blue")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "10px 10px 10px 10px",
                        "padding-top": "5px",
                        "padding-right": "5px",
                        "padding-bottom": "5px",
                        "padding-left": "5px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(267 - 1 - 1 - 5 - 5, 0) + 'px'",
                        "height": "Math.max(64 - 1 - 1 - 5 - 5, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "10px 10px 10px 10px",
                        "padding-top": "5px",
                        "padding-right": "5px",
                        "padding-bottom": "5px",
                        "padding-left": "5px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(267 - 1 - 1 - 5 - 5, 0) + 'px'",
                        "height": "Math.max(64 - 1 - 1 - 5 - 5, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "10px 10px 10px 10px",
                        "padding-top": "5px",
                        "padding-right": "5px",
                        "padding-bottom": "5px",
                        "padding-left": "5px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(267 - 1 - 1 - 5 - 5, 0) + 'px'",
                        "height": "Math.max(64 - 1 - 1 - 5 - 5, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-367da92a-f66c-4a3a-8916-0ca4860482f7 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "10px 10px 10px 10px",
                        "padding-top": "5px",
                        "padding-right": "5px",
                        "padding-bottom": "5px",
                        "padding-left": "5px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(267 - 1 - 1 - 5 - 5, 0) + 'px'",
                        "height": "Math.max(64 - 1 - 1 - 5 - 5, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bc6a564-1d47-40a9-be2f-3c33632eaa01",
                    "transition": "fliphorizontal"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });