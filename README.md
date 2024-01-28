<h1 style="color:#397ce7">
React useEffect Basic
</h1>

<h2 style="color:#397ce7">
Submission Instructions [Please note]
</h2>

<h2 style="color:red">
Maximum Marks - 10
</h2>

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

```
✅ should have an heading - 1 mark
✅ should make an API request on load and validate the response - 2 marks
✅ should display all student cards with correct information - 2 marks
✅ Toggle button should show timer when clicked and button text should change from Show to Hide- 1 mark
✅ Timer should always start from 0 and get updated in every second - 2 marks
✅ Toggle button should hide timer when clicked and button text should change from Hide to Show and  also the timer need to get reset to 0 - 2 marks


```

<h2 style="color:red">
Installation:-
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Clone the repository to your local machine.
- Don't change/override package.json
- Do not forget to install `node modules`
- Start the development server using `npm start`.


<h2 style="color:red">
API Endpoint:-
</h2>

- `https://dummyjson.com/users`



<h2 style="color:#397ce7">
Folder Structure:-
</h2>

```
src
├── App.css
├── App.jsx
├── assets
|  └── react.svg
├── components
|  ├── StudentList.jsx
|  └── Timer.jsx
├── index.css
└── main.jsx
```

<h2 style="color:#397ce7">
Problem Description:-
</h2>

- Landing page should have a heading `Student Management System` with `h1` tag.

#### API call function

- API should get called when the landing page loads.
- On successful API calling, the student cards need to be displayed.
- All the student cards need to have a class named `studentCard`.
- All the student cards need to be wrapped inside a container `div` with class name `student-container`.
- All the student card needs to have an profile picture, name with class `name`, email with class `email` and phone number with class `phone`.
- Student name should contain both `firstname + lastname`
#### Timer Function
- Below the `h1` heading tag, there should be a toggle button with text `Show`.
- `On Click` the button text should changed to `Hide` and a `timer` should start.
- When clicked back on the `Hide` button, the timer should get removed and the timer value needs to be reset back to `0`.
- Everytime when the `Show` button is clicked the timer should start from 0 and it should keep increasing `(time should get updated) ` in every 1 second.
- Add a class `timerValue` to the timer component and also keep the timer value inside a `span` tag.
- The `span` tag should not contain any extra space both before and after timer value. (e.g only show the timer value)

##### Please refer to the below image for clear understanding


<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/vm07D6FJ/use-Effect-1.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>
<figure style="border: 1px solid gray; ">
<img src="https://i.postimg.cc/pdWY2J7Q/use-Effect-2.png" width="100%">
<figcaption align = "center"><b>Fig.4 - Landing page</b></figcaption>
</figure>


<h2 style="color:red">
Note:-
</h2>

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- `Do Not Remove any of the css code given. Rather use the existing className.`
- Also make sure to cross check all the spellings and Case of Texts.
<h2 style="color:red">
General Guidelines:-
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

Good Luck 🤞
Happy Coding 🚀
