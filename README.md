> Due to insufficient funding and overwhelming amount of requests (> 100k a month) Netlify took this website down, I'll try my best to bring it back as soon as possible, due to my exams it will be taking a while but with the next update, I'll be making the backend code opensource as well. Sorry to everyone for this inconvenience, I'll try my best to bring the project back up online as soon as possible.

## Since Netlify took this API down, I have made the backend open source and also the API is available free for public again, hosted on Heroku, you can see more on [CodeX-API Github Page](https://github.com/Jaagrav/CodeX-API).

# [CodeX](https://codexweb.netlify.app)
CodeX is an online compiler for various languages like Java, C++, Python, etc.

[![CodeX Editor](https://dev-to-uploads.s3.amazonaws.com/i/6f0l70d73sf7m7razxmt.png)](https://codexweb.netlify.app)

CodeX has a simple UI in order to store all your codes written in various languages easily at one place.

[![CodeX Home](https://dev-to-uploads.s3.amazonaws.com/i/07a4naxeav1uunz9b8ne.png)](https://codexweb.netlify.app)

You can share the codes' links that you write with your friends without being worried about them making any changes.
CodeX stores all your code details on your device, which means every code that you write will only be editable on the 
device where you write you code in. Every Code shares a key that only your device and CodeX's backend know, so don't 
fear about others making any changes. Although there are ways to hack into others code and make changes but that's for 
you to find out. Once you find it out simply create an issue reporting the bug.

No need to Sign In / Sign Up in order to execute and save your code. Every code automatically saves and updates in realtime
so don't worry about losing it. It will always live in your computer unless you decide to clear your cache.

## Something special for other developers

### Introducing the CodeX API,

Here's how you can execute code in various languages on your own website for free (no, there's no fucking catch, it's literally free),

### Execute Code and fetch output

#### `POST` /.netlify/functions/enforceCode
This endpoint allows you to execute your script and fetch output results.

### What are the Input Parameters for execute api call?

| Parameter  | Description                                                                                                                  |
|------------|------------------------------------------------------------------------------------------------------------------------------|
| "code"     | Should contain the script that needs to be executed                                                                          |
| "language" | Language that the script is written in for example: java, cpp, etc. (Check language as a payload down below in next question)|
| "input"    | In case the script requires any kind of input for execution, leave empty if no input required                                |

### What are the languages that are supported for execution?
Whichever language you might mention in the language field, it would be automatically executed with the latest version of it's compiler.

| Languages | Language as a payload |
|-----------|-----------------------|
| C++       | cpp                   |
| C         | c                     |
| C#        | cs                    |
| Java      | java                  |
| Python    | py                    |
| Ruby      | rb                    |
| Kotlin    | kt                    |
| Swift     | swift                 |

### What if I have multiple inputs?
Whenever taking inputs, make sure to take inputs from a textarea. This would allow the user to make multi-line
inputs, in order to take multiple inputs, the user needs to input every value line by line individually in order
for the backend to differentiate between multiple inputs.

### NodeJS Example to Execute API Call?
```javascript
var axios = require('axios');
var data = JSON.stringify({
           "code":`public class program{
                    public static void main(String [] args){
                        System.out.println(5+5+6);
                      }
                    }`,
           "language":"java",
           "input":""
           });

var config = {
  method: 'post',
  url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
```

### Sample Output
The output is a JSON object comprising only one parameter that is the output.

```json
{
  "output":"16\n"
}
```

This project will not accept any PRs, I will only respond to issues created. There's a few stuff/code that have not been
shared for obvious reasons.

Happy hacking!
