# Description

This project applies all the skills learned on week 2 of the Bootcamp, the skills JavaScript and how to manipulate variables, functions and access user input from the web. 

With that, I was able to create a user Password Generator, where the user can enter a number between 8 and 128, and add some criteria: NUMBERS, UPPERCASE, LOWERCASE and SYMBOLS. As mentioned the user will have the option to select only the criteria that apply to it. I also combine to this project, user response, in case the user decide to go out side of the range, or add a number, or even live empty, so the user would receive a message for each information as an alert to inform that input is not acceptable, and it should add numbers instead. The user also has an option to cancel the program in case it does not want to generate a password.

### Link to the password generator: \* ###[Luiz Borges Portifolio](https://luizborges146.github.io/hw.password-generator/)

## Installation

N/A

## Usage

* Functionalities:.
 * Allow user to add number between 8 and 128
 * In case user add a different number range, letter, symbol or nothing, the web will trigger an alert to inform the user that, the information added is not acceptable and bring the user to the first part again, to add the number.
 * User will be asked to select the criteria they want in the password,<Numbers, Lowercase, Uppercase, Symbols>, in case user does not accept any of the criteria, an confirm option will appear, asking the user to chose between be back to the add number part or to exit.
 * Once the user select the criteria it wants and the length, the system will generate the password.
 * User does not need to refresh the page to re-generate the password, it just need to click "Generate Password" on the screen.

 ```
var input = prompt("How many characters would you like to be?\n Between 8 to 128 character ");
  if (input >=8 && input <=128) {
    passSize = input;
    promptNumber();
  } else if (input === null){
    return;
  } else if(input > 128) {
    alert("You added a number that is bigger than 128.\n Please add a number between 8 - 128!");
    userInput();
  }  else if(input < 8) {
    alert("You added a number that is lower than 8.\n Please add a number between 8 - 128!");
    userInput();
  } else {
    alert("Hey, it seems that you added something different from a number!\n Please add a number between 8 - 128!");
    userInput();
  }

  function checkAllOptions (){// create a new function to check if the user will add all the option as false
  if (number === false &&
    upperCase === false &&
    lowerCase === false &&
    symbol=== false) {
      alert("Hey, it seems that you did not select any criteria to generate your password!");
      var option = confirm("Press ok to start over or \ncancel, to leave the application!");
      if (confirm === true) {
        userInput();
      } else if (confirm === false) {
        return;
      }
    }
}

 ```


## External support documentation

As part of the process, I used some references to complete the task:

- [Font Awesome](https://fontawesome.com/)<br />
- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />

## Social

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/https://www.linkedin.com/in/luiz-borges-2377b7142//)

N/A

## License

Please refer to the LICENSE in the repo.
