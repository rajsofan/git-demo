
# CertHeads Login Demo

A beginner-friendly HTML, CSS, and JavaScript login-form demo created for **CertHeads — AZ-400 Made Simple, Episode 12: Feature Branches & Pull Requests**.

> **Important:** This project demonstrates form validation and a Git workflow. It does **not** authenticate users, connect to a backend, or store credentials. Do not use it as production authentication.

## Project files

```text
certheads-login-demo/
├── index.html   # Login form
├── style.css    # Page styling
├── script.js    # Client-side validation
└── README.md    # Instructions
```

## Prerequisites

- A modern web browser
- Git installed
- Access to an Azure DevOps project and Azure Repos repository
- VS Code (optional)

No Node.js, .NET, or package installation is required.

## Run locally

1. Clone the Azure Repos repository using its **Repos → Files → Clone** HTTPS URL:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Open `index.html` in a web browser. If the demo is in a subfolder, open `login-demo/index.html` instead.
3. Enter an email address and a password of at least eight characters.
4. Click **Login**. A message confirms that the form passed basic validation; it does **not** sign you in.

## Episode 12 — Feature branch lab

Create a branch from the repository's default branch (`main` in these examples):

```bash
# Check your current branch and working tree
git status
git branch

# Start from the latest main branch
git switch main
git pull --ff-only origin main

# Create and switch to your feature branch
git switch -c feature/login
```

Create or modify `index.html`, `style.css`, and `script.js`, then review and stage only the files you intend to commit:

```bash
git status
git add index.html style.css script.js README.md
git diff --cached
git commit -m "Add CertHeads login form demo"
git push -u origin feature/login
```

If the files live inside `login-demo/`, stage that folder instead (`git add login-demo/`).

### Open a Pull Request in Azure DevOps

1. Open **Repos → Branches** in Azure DevOps.
2. Find `feature/login` and select **New pull request** (or use **Repos → Pull requests → New pull request**).
3. Set **source** to `feature/login` and **target** to `main`.
4. Title: `Add CertHeads login demo`.
5. Explain the changes in the description and select an appropriate reviewer.
6. Review **Files**, **Commits**, comments, and any policy checks.
7. Address feedback on the same branch, commit and push again; the PR updates automatically.
8. After required approvals and checks pass, **Complete** the PR and optionally delete the feature branch.
9. Verify the files appear on `main`.

**Note:** Required reviewers and build validation are enforced only when the relevant branch policies have been configured. These are covered in the next episode.

## Suggested review exercise

Ask the reviewer to suggest a small improvement, such as changing the button label from **Login** to **Sign In**, or adding a clearer validation message. Update the code and push again to show how a pull request evolves.

## Learning outcomes

- Understand feature branches and why teams avoid direct changes to `main`
- Distinguish local commits from remote pushes
- Stage specific files before committing
- Open, review, update, and complete a pull request

## Security notes

This sample intentionally has no authentication service. Client-side checks alone cannot verify a user's identity. A real login system requires server-side authentication, secure sessions, transport security, and proper credential handling. Never add real passwords or secrets to this repository.

---

**CertHeads — Learn it. Build it. Certify it.**
