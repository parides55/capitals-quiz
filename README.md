[CLick here to see the webpage](https://parides55.github.io/capitals-quiz/)

# **What's the ?CAPITAL?**

The **What's the ?CAPITAL?** game it's an online quiz that is looking to give its users a fun way to get to know the capitals of many countries in the world. Also, this game shows what you can achieve with JavScript, since the whole website runs with the help of JavaScript, and it's fully responsive with any device. The quiz has a 3 color gradient background, which is added to all the areas of the game, to add more interest and attract the user, and with the features it has makes the game easy to use and provide its users with a feedback regarding the final results and their progress.

<img src="images/responsive-mockup-optimized.jpg">

<hr>
<details>
<summary><b>Table of Content</b>(click to open)</summary> 

  -[Feathures](#features)<br>
  -[Features left to implement](#features-left-to-implement)<br>
  -[Testing](#testing)<br>
  
</details>

## Features

The features available in the game are a home button, which always will bring you to the main landing page, a menu icon, which provides selections to the Instructions of the game, to view the 3 highest scores and to access the contact form, buttons that are designed to give a nice flow and control to the user to start the game, go to the next question or play again. Each features is designed to be easily identified and understoond and give to the user an easy way to navigate around the game. 

### Existing Features

- __The Landing page__

  - The main Landing page which has in the middle a big tittle with the name of the game which attempts to make clear what the quiz is about.
  - Below the title is a big "Lets's Play!" button which attempts to attract the attention of the user to start playing the game.

<img src="images/main-page-optimized.jpg">

- __The Home Button__

  - The Home Button is always visible in the left top corner and is the only way to come back to the main landing page and start another game.
  - Also, is a way to stop your current game and start another one, since its available throughout the duration of the game in the left top conrer.

<img src="images/home-button-optimized.jpg">

- **The Menu Button**

  - The Menu Button, which is an unordered list icon, once pressed it will give three selections for the user. To view the Instructions of the game, the three Highest Scores and to access the Contact form.
  - Once the selections are displayed the unordered list icon is replaced with a cross icon to indicated that when the user clicks on it the selections will be removed.
  - The three selections have a hoover effect as well to clearly indicate to the user which one is about to be selected. 

<img src="images/menu-button-optimized.jpg">

<img scc="images/menu-selections-optimized.jpg">


- __The Question section__

  - The question section is where the user will be able to see the elementary arithmetic question to answer as part of the game. The user will be able answer the questions in the answer box provide
  - The user will be able to submit their answer and a pop-up will make it known to the user if they answered correctly.

![Question](media/love_maths_question.png)

- __The Score Area__

  - This section will allow the user to see exactly how many correct and incorrect answers they have provided.

![score](media/love_maths_answer.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Another feature idea

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 10 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://code-institute-org.github.io/love-maths/>

## Credits

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

### Content

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

Congratulations on completing your Readme, you have made another big stride in the direction of being a developer!

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work!

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message
  - Make sure to keep the messages in the imperative mood

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept.

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process!
