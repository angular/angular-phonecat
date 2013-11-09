# Private Maintenance Scripts

This folder contains a bunch of scripts that the maintainers of the phonecat tutorial project
can use to update and modify the steps of the tutorial.

## Demo Pages on GitHub

We use GitHub to host a live demo of each step.  This is stored in the gh-pages branch of the git
repository.  The folder structure of this branch is different to the main master branch. Each step
is copied to its own folder.

- **snapshot-web.sh**: Run this script to iterate through the step tags checking out the application
  code and copying it to a folder `angular-phonecat-snapshots-web`, which can then be used to update
  the gh-pages branch.

## Sandbox and Testing

Similar to how we can generate the live demo pages, We can also snapshot all the steps into a
folder `angular-phonecat-snapshots`, which then contains an additional folder called `sandbox`.
This `sandbox` folder contains the `goto_step` script which allows you, quickly, to move from one
step to another without having to worry about checking out different tags or branches.

This is particularly useful for running the unit and e2e tests. **Don't forget that, before you can
use karma to do testing, you will need to install the necessary karma plugins by running
`npm install` in the base folder.**

- **snaphot.sh**: Run this script to generate the `angular-phonecat-snapshots` folder, containing
  a copy of each step's application files and the `sandbox` folder.
- **goto_step.sh (goto_step.bat)**: These scripts are copied into the `sandbox` folder when the
  snapshots folder is created. Run the appropriate one for your OS to remove the current step's
  application files from the sandbox and copy in a new one.
- **test-all.sh**: Run this script to recreate the snapshot folder and then run all the unit and e2e
  tests for all the steps in the tutorial.

## Scraping Data

The phone data used by the application is scraped from a Google search page.

- ScrapeData.js: Run this script using node.js to access the web page containing the phone data and
  copy the data into the `app/phones` folder.
- **format-json.sh**: Run this script to reformat the JSON data files so they are more readable.

## Pushing to GitHub

Each step in the tutorial is one commit in the git repository. Each step is also is identified by a
git tag. Any changes to a step requires the commits to be rebased and retagged.

Since it is likely that rebasing and retagging the commits will cause the local git repository to
diverge from the GitHub repository, we must force a push of the master and the tags to GitHub.

- **retag.sh**: Run this script to delete all the step tags and reapply them to the commits that
  contain the steps.  This is useful if you have rebased the commits after modifying an earlier
  step.
- **push-to-github.sh**: Run this script to retag and force push the master branch and the tags to
  the remote GitHub repository.