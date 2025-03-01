#!/usr/bin/env bash

set -euo pipefail

githubBaseUrl="https://github.com/itsferdiardiansa/Oxcyn"
workspaceName=""
latestVersion=""
tagVersion=""
tagMessage=""

declare -A commands=(
  [workspace]=""
  [path]=""
)

createTagMessage() {
tagMessage="
[Release] Bump version to ${tagVersion}. 
Change was created by the github actions and automation script.
"
}

createAndPushTag() {
  createTagMessage

  echo "Create tag on ${workspaceName} workspace."
  
  git tag ${tagVersion} -m "${tagMessage}"

  git push origin ${tagVersion}
}

# Create a release from the latest pre-release feature
createAndPushRelease() {
  previousVersion=$(gh release list | grep $workspaceName | awk 'NR==1{print $1}')
  pullRequestData=$(gh pr list --state merged --json number,url --head release/${workspaceName}-${latestVersion} --limit 1)
  compareVersion="${previousVersion}...${workspaceName}-${latestVersion}"

  # Get the pull request url
  pullRequestUrl=$(echo $pullRequestData | jq -r ".[].url")

  note_template="[Pull Requests](${pullRequestUrl}) | [Compare](${githubBaseUrl}/compare/${compareVersion})"
  gh release create "${tagVersion}" -p --title "${tagVersion}" -n "${note_template//BASE_REVISION/$BASE_REVISION}"
}

# Get the latest release of workspace and set the variables
setLatestRelaeseVariables() {
  pkgJson="${commands[workspace]}/${commands[path]}/package.json"
  latestVersion=$(jq -r .version ${pkgJson})
  workspaceName=$(jq -r .name ${pkgJson})

  if [ -z "$latestVersion" ]; then
    latestVersion="0.0.0"
  fi

  tagVersion="${workspaceName}-${latestVersion}"

  echo "tag_version=${tagVersion}" >> "$GITHUB_OUTPUT"
}

populateArguments() {
  for cmd in "$@";
  do
    cmd="${cmd:2}"
    IFS="=" read -a formattedValue <<< "${cmd//, ,}"
    declare -p formattedValue

    type="${formattedValue[0]}"
    value="${formattedValue[1]}"

    commands[${type}]=${value}
  done
}

run() {
  echo "Running release tasks..."

  populateArguments "$@"

  setLatestRelaeseVariables

  createAndPushTag
  createAndPushRelease
}

run "$@"