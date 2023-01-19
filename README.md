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

6. Open README.md (outside the 'main' folder) and add your name to this list:Rajveer(2104557)

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
