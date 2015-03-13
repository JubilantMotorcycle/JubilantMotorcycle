(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Loading",
    "b22f84c2-af77-4e3b-bb80-7ff14ea17a71": "Camera - Information",
    "e6674634-79a3-46a2-88a4-a37252ee1aa6": "Camera",
    "bc8263cc-3a7f-4c79-8fb9-124a52c6060d": "Display-Profile",
    "0bc6a564-1d47-40a9-be2f-3c33632eaa01": "Display",
    "137c7dcb-e008-468e-a03c-cb862dfefcf0": "Camera - Additional Information",
    "b84cdb25-46a2-4c48-818f-a34b0b647750": "Liked!",
    "83b04c9a-ca30-42cb-90be-0816e27c5bcd": "Camera - Submitted",
    "367da92a-f66c-4a3a-8916-0ca4860482f7": "Login-Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);