# Find Triggering Pull Request
Finds the pull request associated with a triggered event


```yaml
inputs:
  token:
    description: "GitHub token used for authentication"
    required: true

outputs:
  pr-number:
    description: "The pull request number, if found, otherwise undefined"
```

## Usage:

```yaml
on:
  workflow_run:
    types: completed
...
jobs:
  useful-job:
    runs-on: ubuntu-latest
    steps:
      - id: find-triggering-pr
        uses: peternied/find-triggering-pr@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - run: echo ${{ steps.find-triggering-pr.outputs.pr-number }}
```

# Changelog

## v1
- Initial Release