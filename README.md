# Hackathon
This repo is for algorithmics hackathon project

# Rules for contributing in this repository:
1. Create your own branch named after you, commit and push code to your own branch only.
1. Create Pull Request for merging your branch when your work is done.
1. Please write sensible commit messages also write commit description if changes made are crutial or large in number.
1. Use Issues frature when suggesting any change or update.

# Tech-Stack 
## All team members are required to set up the following in their PC's
1. FireBase (data base)
1. React (frame work)
1. Android Studio
1. Github desktop
1. Visual Studio code

## Requirements
1. node
1. Git CLI & Git Bash
1. run this command if error about react-scripts occur 
  ```
  npm install react-scripts --save
  ```

# How to use git
1. Create a 'fork' of Algorithmics/Hackthon.
![alt text](./ImagesForREADME/fork.png?raw=true)
Or use gh for forking
```
gh repo fork Algorithmics/Hackthon --clone
```
2. You will see a repository like: YourUserName/Hackathon

3. Check your current branch using:
```
git branch
```

4. Create a new branch (of your forked repository)
```
git branch <username>
git checkout <username>
```
5. Now you are on username branch of your cloned repository.

6. Open README.md (outside the 'main' folder) and add your name to this list: [RaghavJit, ]

7. Now you can commit changes (you can also use GitHub Desktop)
```
git status
git add .
git commit -m "I have added my name in the list"
git push
```
This will push changes to the username branch of your forked repo.

8. Create a Pull Request using the following code (you can also use GitHub Desktop):

This will open you browser, you can also remove -w flag and then you will need to manually specify the title and body of yuor merge.
```
gh pr create -w
```
To create a merge requst using command line (make sure you are on username branch):
```
gh merge username
git checkout main
git merge username
git push -u origin main
```


9. Once you merge the branch username and main you will see your changes on main.

10. Now go to your repository username/Hackathon and sync changes with Algorithmics/Hackathon. (This will bring all the changes on source to your fork.)

11. After sync you can create a pull request to pull changes in upstream. (This will replicate all the changes on your personal fork into Algorithmics/Hackathon)

![alt text](./ImagesForREADME/sync%26pull.png?raw=true)


### Refer to the following for more instructions.
1. [GitHub CLI](https://cli.github.com/manual/gh_repo_sync)
1. [Git Bash](https://git-scm.com/docs)

## PRECAUTIONS
1. Never push or commit changes directly in main branch.
1. Never push or commit changes without checking status and fetching origin.
1. Check your branch before push or commit. (use git reset * command if commited in wrong branch, this will undo the git add .).

# IDEA

### The idea is to devolop a smart to-do application using React Native
The user, after downloading the application will first answer a questionaire. And input the tasks that he wants to do. The app will suggest the best time to start the task. 

### Following features are to be included in the below versions:



## Version - 1
1. <u>Desgine UI/UX:</u> The UI for the app will be very minimalist and easy to use. This will reduce the friction of interacting with the app. The UI will have:
    1. Welcome/Get-Started page
    2. Questionaire page
    3. Add task page

1. In this version we will only ask 10 questions to the user.
1. This will allow user to add, edit, delete tasks.
1. The task list will be shown on the wallpaper of your android device (in case there are too many tasks the wallpaper will be scrollable, User will have the option to keep or remove this)

## Version - 2
1. UI will be improved and new features will be added.
1. Impliment the algorithm that will take into account these following factors:
    1. Daily activities (asked in questionaire) 
    2. Duration of task 
    3. Prioratize tasks based on user's input (there will be three level user can choose when writing a task: 1, 2, 3)
    4. User will have the ability to over-write any suggestions.

## Version - 3
1. Task will be automatically prioratized based on their type (Ex: It is more important to finish a pending report at work than getting a haircut)

## Version - 4
1. <u>Task Prep feature:</u> Before doing a task the app will notify you to perform some simple preprations (Ex: The task is to study for math exam at 5 P.M. the app will notify you at 4 P.M. to keep your books, notebook and pen on the table.)
1. App will also take into account any holidays and weekends and suggest tasks based on the data (App will have a calander with all the important holidays etc.)

## Version - 5
1. A screen monitor will be added to monitor user's screen time and alert him if he is spending more time than the set limit.
1. App will be made cross-platform and will be automatically synronised on all devices.