<p align="center">
<a href="https://github.com/Algorithmics001/Hackathon/stargazers"><img src="https://img.shields.io/github/stars/Algorithmics001/Hackathon" alt="GitHub stars"></a>
<a href="https://github.com/Algorithmics001/Hackathon/network"><img src="https://img.shields.io/github/forks/Algorithmics001/Hackathon" alt="GitHub forks"></a>
<a href="https://github.com/Algorithmics001/Hackathon/issues"><img src="https://img.shields.io/github/issues/Algorithmics001/Hackathon" alt="GitHub issues"></a>
<a href="https://github.com/Algorithmics001/Hackathon/pulls"><img src="https://img.shields.io/github/issues-pr/Algorithmics001/Hackathon" alt="GitHub pull requests"></a>
<img src="https://img.shields.io/github/last-commit/Algorithmics001/Hackathon" alt="GitHub last commit">
</p>

<h1 align="center"> Maintainers </h1>
<p align="center">
<a href="https://github.com/Algorithmics001/Hackathon/graphs/contributors"><img src="https://contrib.rocks/image?repo=Algorithmics001/Hackathon&max=2" alt="GitHub stars"></a>
</p>

<p align="center">
<a href="https://github.com/RaghavJit">@RaghavJit</a>
<a href="https://github.com/whogurdeil">@whogurdevil</a>
</p>

<p align="center">
<img src="https://discordapp.com/api/guilds/1093799889319776276/widget.png?style=banner2" alt="Discord Banner 2"/>
</p>

# Contributors
<a href="https://github.com/Algorithmics001/Hackathon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Algorithmics001/Hackathon" />
</a>

# Steps to contribute to this Project:
## 1. Install Git & Github
You can do it by following this [video tutorial](https://www.youtube.com/watch?v=MFtsLRphqDM)

## 2. Fork this repository to your own Github account by:
-Create a 'fork' of Algorithmics/Hackthon.
![alt text](./ImagesForREADME/fork.png?raw=true)
Or use gh for forking
```
gh repo fork Algorithmics/Hackthon --clone
```

## 3. Clone your forked repository
- Goto your own github page and you will see repo named hackathon
```
github/YourUserName/Hackathon
```
- Copy the URL and run the following command on your cmd:
```
git clone URL
```

## 4. Set up development environment
- Install choco, jdk11 and android studio+sdk by reading [this documentation](https://reactnative.dev/docs/environment-setup) with react native CLI ***not expo***

- Change your directory to the directory where you have cloned the repo
```
cd /your-directory-path/Hackathon/code
```

- Now run the the following command to install the required modules for this react native app
```
npm install
```

## 5. Run this app on emulator or android device
- Now run the command
```
npm start
```
- Now press a for running it on android emulator

## 5. Make the required changes you want
- **Always sync fork** on your cloud github repo and run git pull command if any changes are there in remote but not on system
- It is suggested to create a new branch for new change 
- If you are not comfortable with branching process you can do it directly
- Just make the require changes and run the following commands
```
git add .
git commit -m "Write about what changes you have made"
git push
```

## 6. Pushing to the origin or original project repo
- Goto you github hackathon repository
- Press contribute button
- Write about the changes you have made or issue you have solved
- and create pull request
![alt text](./ImagesForREADME/sync%26pull.png?raw=true)
- We will examine for any discrepancies or any conflicts before merging your pull request.

## Congratulation!!! you have made up to so far if you are still reading


# Tech-Stack 
1. React Native(frame work)
1. Android Studio
1. Github desktop
1. Visual Studio code
1. iconkitchen(for generating app icon)

## Requirements
1. node
1. Git CLI & Git Bash
1. run this command if error about react-scripts occur 
  ```
  npm install react-scripts --save
  ```




### Refer to the following for more instructions.
1. [GitHub CLI](https://cli.github.com/manual/gh_repo_sync)
1. [Git Bash](https://git-scm.com/docs)

## PRECAUTIONS
1. Never push or commit changes directly in main branch.
1. Never push or commit changes without checking status and fetching origin.
1. Check your branch before push or commit. (use git reset * command if committed in wrong branch, this will undo the git add .).

# IDEA

### The idea is to develop a smart to-do application using React Native
The user, after downloading the application will first answer a questionnaire. And input the tasks that he wants to do. The app will suggest the best time to start the task. 


## Todos

1. Set Wallpaper:
    - There is no need for dedicated component for 'Set Wallpaper' feature, the wallpaper must refresh every time an edit is made in the task list.
    - Allow user to pick color and font for wallpaper.
1. Data base:
    - Add the feature to catograise tasks in various lists, each category will be highlighted with a different color. 
1. New features:
    - Add alarm/notification for tasks.
    - Add a timeline where user can visualize, the tasks.
    - Make the app cross platform.
1. Quick Tasker:
    - Allow reordering the tasks and add scroll view.
1. UI/UX:
    - Add tab-view for components.
    - The app should open in ViewTask window.
