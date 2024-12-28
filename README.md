# Expo Managed Workflow Build Failure: Missing Dependency

This repository demonstrates a bug encountered while building an Expo project using the managed workflow.  The project fails to build due to a reported missing dependency, 'react-native-screens', even though it's listed in package.json.  This issue also affects `expo prebuild`.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Attempt to run `expo start`.
4. Observe the build failure indicating a missing dependency.
5. Try running `expo prebuild` and observe the failure.

## Solution

The solution involves ensuring the Expo managed workflow correctly installs and configures the required dependencies. The solution file (bugSolution.js) provides a cleaned-up version of the problematic files. More info can be found in the solution file comments.