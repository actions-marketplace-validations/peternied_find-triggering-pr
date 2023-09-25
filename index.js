const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("@octokit/action");

async function run() {
  try {
    const octokit = new Octokit();

    const { context } = github;
    const { repository } = context.payload;
    const workflowRunId = context.payload.workflow_run.id;
    core.info(`Checking workflow_run id ${workflowRunId}`);

    const workflowRun = await octokit.actions.getWorkflowRun({
      owner: repository.owner.login,
      repo: repository.name,
      run_id: workflowRunId,
    });
    core.info(`Workflow response, ${JSON.stringify(workflowRun)}`);

    const result = { "pr-number": workflowRun.data?.pull_requests[0]?.number };
    core.info(`Result ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
