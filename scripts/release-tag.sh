#!/usr/bin/env bash

set -euo pipefail

githubBaseUrl="https://github.com/itsferdiardiansa/Oxcyn"
workspaceName=""
previousVersion=""
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

createTag() {
  createTagMessage

  echo "Create tag on ${workspaceName} workspace."
  
  if [ -z "${COMMIT_TAG}" ]; then
    git tag ${tagVersion} ${COMMIT_TAG} -m "${tagMessage}"
  else
    git tag ${tagVersion} -m "${tagMessage}"
  fi

  git push origin ${tagVersion}
}

# Create a release of the latest feature
createRelease() {
  compareVersion="${workspaceName}-${previousVersion}...${workspaceName}-${latestVersion}"

  note_template="[Pull Requests](${pullRequestUrl}) | [Compare](${githubBaseUrl}/compare/${compareVersion})"
  gh release create "${tagVersion}" -p --title "${tagVersion}" -n "${note_template//BASE_REVISION/$BASE_REVISION}"
}

setLatestVersion() {
  pkgJson="${commands[workspace]}/${commands[path]}/package.json"
  latestVersion=$(jq -r .version ${pkgJson})
  previousVersion="${latestVersion}"
  workspaceName=$(jq -r .name ${pkgJson})

  if [ -z "$latestVersion" ]; then
    latestVersion="0.0.0"
  fi

  tagVersion="${workspaceName}-${latestVersion}"
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
  setLatestVersion

  createTag
  createRelease
}

run "$@"