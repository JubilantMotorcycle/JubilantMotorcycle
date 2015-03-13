jQuery("#simulation")
  .on("click", ".s-137c7dcb-e008-468e-a03c-cb862dfefcf0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-137c7dcb-e008-468e-a03c-cb862dfefcf0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bc6a564-1d47-40a9-be2f-3c33632eaa01",
                    "transition": "slidedown"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bc6a564-1d47-40a9-be2f-3c33632eaa01",
                    "transition": "slidedown"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-black_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
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
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
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
                    "isbackward": true,
                    "transition": "slideright"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
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
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
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
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-black_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2 span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
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
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-137c7dcb-e008-468e-a03c-cb862dfefcf0 #s-Button-black_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(151 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
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
                    "target": "screens/83b04c9a-ca30-42cb-90be-0816e27c5bcd",
                    "transition": "slideleft"
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
  })
  .on("focusin", ".s-137c7dcb-e008-468e-a03c-cb862dfefcf0 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input-text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input-text",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input-text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input-text_1",
                    "value": ""
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