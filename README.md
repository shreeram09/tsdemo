#…or create a new repository on the command line

  echo "# tsdemo" >> README.md  
  git init  
  git add README.md  
  git commit -m "first commit"  
  git branch -M main  
  git remote add origin https://github.com/shreeram09/tsdemo.git  
  git push -u origin main 

#…or push an existing repository from the command line

  git remote add origin https://github.com/shreeram09/tsdemo.git  
  git branch -M main  
  git push -u origin main

#…or import code from another repository
- You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## if you are experiencing error 'tsc command not recognized'
- npm uninstall -g tsc
- npm uninstall -g typescript


- npx --package typescript tsc --init
- npx --package typescript tsc --version
 ### OR
 - npm install -g typescript
 - npm install -g tsc


note: please maintian sequence of installation

* 👇️ generate tsconfig.json file
tsc --init

* 👇️ get typescript version
tsc --version

# compile and run typescripts
 - compile : tsc file_name.ts 
 - run : node file_name.js

 note: compiled javascript filename always created with same filename as typescript file 