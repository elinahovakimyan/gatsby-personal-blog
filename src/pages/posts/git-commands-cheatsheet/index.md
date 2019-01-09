---
title: 'Git commands cheat sheet: basic commands for software engineers'
date: "2015-05-06T23:46:37.121Z"
category: 'Programming'
---

> When I just started using git, I was frustrated and the “git” world seemed to be a nightmare for me. This became even more scary when I started to work with a team when the real power of git comes in, which is controlling all the different versions of the same code and sharing it with each member. Then I decided to write this post and explain it in the simplest way. So, let’s rock it together :))

In this post, I included only the most necessary commands that I need very often while working. Everything you’ll see in such a format (_something_) are the parts that you should customize based on you project without using _. Before learning the commands make sure you have:

1. **a git repository** — To have a git repository you can sign up on a web-based hosting service for version control using git, such as GitHub or BitBucket (I am going to use GitHub for my examples). Having this, you can host your repositories on web and access them whenever you want or share them easily.
2. **git installed** — To check whether you have git installed or not, type `git` in terminal (Unix OS) or command prompt (Windows). If the response is `git: command not found` then follow the steps described in this article.

> Note: Linux and macOS users can use default terminals. Windows users would rather use Git Bash.

For making most use of this article, I will describe 3 most common scenarios when you want to use git.

One step before that => tell the system who we are.

`git config --global user.name “Your Name"` — This command sets a user name for commits. If you want to set a username for a particular repository, not globally use the same command, skipping --global part.

`git config --global user.email “youremail@mail.com"` — This one sets an email for commits. The same works here, remove --global and it will refer to the particular repository.

To check it later you can just type `git config user.name` or `git config user.email`.

## Scenario 1: You have a new project and want to use git in it
Let’s imagine we have created an outstanding project and we want to keep it on git. Assuming you have already created your github account we go on with the following steps.

1. `git init` — By this command we initialize git in our directory so that it can keep track of our actions. This creates a new secret directory in your project, called `.git`.
2. `git add .` || `git add _file.name_` — Add all the new or updated files that we want to push to GitHub. Assume each project has 3 rooms: the local one, the remote git version and something in between of those — staging room. You can commit and push whatever is in your staging room as local changes are not accessible for git. This command takes whatever we choose from local room to the staging room. `git add .` records all the new changes, but if you want to add only a specific file, indicate your file name instead of `.`
3. `git commit -m "Describe your changes here"` — Committing adds your changes to your local repository. Whatever you added with your last command, now is ready to be sent to the online repository.
4. `git remote -v` — Now let’s check what remote repositories are connected to our project. For the first time you should see none. Let’s add one.
5. `git add remote origin _repo-url_.git` For pushing our changes to the remote repository, we should first create it. Go to GitHub and create a new repository, then copy the URL of your repository and replace the _repo-url_ with your real one.
6. `git push origin master` — Finally! We are almost there. By this you will push whatever is already committed in the local repository to the remote one.
  * If you check your remote repositories again, you will see your repository urls and origin: besides them, that’s why we use `origin` here. For pushing to heroku we would write `git push heroku master`.
  * Master is the branch name (more coming soon).

> NOTE: `git commit -am "Some commit"` — You can combine the adding and committing in one command if you have not created new files as they are not recorded in this way. You cannot use this for the first commit as everything is new for git.


## Scenario 2: You are working in a team that uses git and you want to get the project locally

#### *To get the project*

* `git clone _clone-url_` — Cloning does exactly what the word says. By this you create a local clone of a particular project. Usually there is a URL for cloning with HTTP, or just copy the URL and add .git after the URL.
* `git fetch _remote-name_` — This fetches all the remote changes on your remote repository made by other people without merging them to your own branches. Usually the remote-name will be origin for you ;)
* `git merge _remote-name/branch-name_` — Whatever you fetched, will be merged with your changes on your branch.

> In the simplest terms, git fetch + git merge = git pull

#### *To work (Usually this portion will be used to push your changes)*

* `git add .` — Add your changes to staging room.
* `git commit -m "Your changes"` — Commit your changes to the local repository.
* `git pull origin _branch-name_` — Get the remote changes made by other people merging to your branch. It’s recommended to pull the changes both before starting working and before pushing to avoid merge conflicts. Also, be careful to fix all the conflicts and add your new changes before pushing.
* `git push origin _branch-name_` — Send your changes to the remote repository.

#### *To work in a better way*

To make the work more efficient teams use different branches for different features in order not to spoil the master branch with buggy code.

* `git checkout _branch-name_` — This command changes the branch you are working on. Be careful to push your changes to the branch you want to.
* `git checkout -b _branch-name_` || git branch _branch-name_ — These commands both create a new branch. The branch will inherit all the code from the branch that you are in when creating this new branch.
* `git merge _branch-name_` — As already discussed, this brings other branch’s changes to the branch you’re working on.

## Scenario 3: You did something wrong or you want to save your current changes for later commit

`git stash save` — This kind of “deletes” all the not committed changes and restores the initial state, saving it locally.

`git stash pop` || `git stash apply` — These commands bring back the changes you just stashed. You can continue working on them. After pop you cannot refer to these changes again later as it removes them thoroughly, while if you use `apply` you get the advantage of reusing.

## Bonus Time!

`git status` — Check what’s up with your repository, specifically the branch and not staged changes.

`git log` — Explore all the commits done and see who changed your masterpice code! 3:)

`.gitognore` — This is a file you should create in your project and include all the files or directories that should be ignored by git. the file should be named .gitignore .

That’s it! Hope this will be helpful for you and you can refer to this for your work! Feel free to ask any questions you may have.