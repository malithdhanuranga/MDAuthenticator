# Developer Workflow for MDAuthenticator

This document outlines the strict, step-by-step development lifecycle required for every new feature, bug fix, or update added to the MDAuthenticator project. This workflow leverages the specialized agent roles to ensure high-quality, standardized, and fully tested code.

---

## Phase 1: Discovery & Documentation (Product Owner)
Before any code is written, the Product Owner is responsible for clearly defining the scope of work.
1. **Define User Stories:** Clearly document what the user needs and the business logic required.
2. **Acceptance Criteria:** Detail the exact conditions that must be met for the feature to be considered complete.
3. **Tracking:** Create a formal issue or ticket (e.g., in GitHub Issues) with these documented requirements.

## Phase 2: Technical Design & Verification (Architect)
The Architect takes the Product Owner's requirements and maps them to technical solutions.
1. **System Design:** Design necessary Prisma database schema changes, API endpoints, and frontend component structures.
2. **Cross-Check:** Verify that the technical design fully satisfies all the Product Owner's acceptance criteria without introducing security flaws or performance bottlenecks.
3. **Approval:** The architect explicitly signs off on the technical design plan before development begins.

## Phase 3: Implementation (Frontend/Backend Developers)
With the design verified, developers begin coding in an isolated environment.
1. **Branching:** Developers pull the latest code from `main` and create a dedicated feature branch (e.g., `feature/user-login`).
2. **Local Environment:** Developers use the provided `docker-compose` environment to spin up the database and application locally.
3. **Coding:** Code is written strictly following the Architect's design document.

## Phase 4: Code Standards & Review (Code Standards Checker)
Once development is complete, the code is heavily scrutinized for quality and consistency.
1. **Formatting & Linting:** Automated tools (Prettier, ESLint) format the code and catch bad patterns.
2. **Type Safety:** TypeScript strict mode checks are run to ensure there are no implicit typing errors.
3. **Automated Analysis:** Tools like SonarQube (or equivalent static analysis) run to catch code smells, security vulnerabilities, and logic flaws.
4. **Resolution:** Developers must fix all warnings and errors. No code passes this phase with unresolved warnings.

## Phase 5: Full Cycle Testing (QA & Testing)
Code that meets standards must now prove it works correctly through automated testing.
1. **Unit Testing:** Validate that individual utility functions, hooks, and components work in isolation.
2. **Integration Testing:** Test that the Node.js API correctly interacts with the PostgreSQL database and external services.
3. **End-to-End (E2E) Testing:** Simulate real user interactions (e.g., via Cypress or Playwright) to ensure the entire flow works from the browser down to the database.
4. **Test Coverage:** Ensure the new code meets the required test coverage percentage before moving forward.

## Phase 6: Finalization & Version Control (DevOps)
Only after passing all previous phases is the code allowed to reach the main repository.
1. **Pre-commit Hooks:** Local hooks automatically run linters and tests one last time before allowing a commit.
2. **Commit:** Code is committed using standardized, descriptive commit messages.
3. **Push & Pull Request:** The feature branch is pushed to GitHub, and a Pull Request (PR) is opened against the `main` branch.
4. **CI/CD Verification:** GitHub Actions (or similar DevOps pipelines) run the standards checker and testing suites automatically in the cloud.
5. **Merge:** Upon a successful pipeline run and final human review, the code is merged into `main` and prepared for deployment.
