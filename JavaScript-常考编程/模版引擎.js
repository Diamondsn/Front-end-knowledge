var template = "<p>Name: <a href = "mailto:{{email}}">{{name}}</a>
// Company：{{company}}</p><p>City：{{city}}</p>",
me = {
name: "sdcV",
email: "bill@microsoft.com",
company: "Microsoft",
city: "London"
};

function applyDataToTemplate(templateString, dataObject) {
var key, value, regex;
for(key in dataObject){
regex = new RegExp("{{" + key + "}}", "g");
value = dataObject[key];
templateString = templateString.replace(regex, value);
   }
    return templateString;
}
