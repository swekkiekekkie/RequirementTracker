# RequirementTracker

**RequirementTracker** is a tool and specification framework that standardizes the documentation and tracking of functional and non-functional requirements, test plans, and user stories in software development. It aims to enhance software quality by enabling comprehensive coverage tracking, ensuring that requirements, code, and tests align with documented objectives.

## Features

- **Standardization**: Define a unified format for documenting requirements, test plans, and user stories, allowing easy parsing and analysis.
- **Coverage Tracking**: Implement tooling to check and enforce coverage across documentation, code, and tests, highlighting any gaps.
- **Automation**: Generate context-aware prompts for AI tools (e.g., GitHub Copilot) to streamline development tasks.
- **TypeScript Integration**: Use a JSDoc-like format targeting TypeScript to integrate seamlessly into the development workflow.
- **Documentation Generation**: Automatically produce user-friendly documentation and visualizations of relationships and coverage.
- **Language Server Protocol (LSP) Implementation**: A language server that provides language-agnostic support for controlled language comments/annotations placed inside multiline comments.

## Getting Started

To get started with RequirementTracker, follow these steps:

1. **Clone the Repository**: Clone the RequirementTracker repository to your local machine.
   ```sh
   git clone https://github.com/swekkiekekkie/RequirementTracker.git
   cd RequirementTracker
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm or yarn.
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the Tool**: Use the provided CLI commands to run the tool and generate documentation.
   ```sh
   npm run start
   # or
   yarn start
   ```

## Using the LSP Server

The RequirementTracker includes a Language Server Protocol (LSP) server that provides language-agnostic support for controlled language comments/annotations placed inside multiline comments. The LSP server detects the language from the file extension and parses the contents of multiline comments.

### Setting Up the LSP Server

To set up the LSP server, follow these steps:

1. **Navigate to the LSP Directory**: Go to the `language-server` directory.
   ```sh
   cd language-server
   ```

2. **Install LSP Dependencies**: Install the necessary dependencies for the LSP server.
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the LSP Server**: Start the LSP server.
   ```sh
   npm run start
   # or
   yarn start
   ```

### Using the LSP Server in Your Editor

To use the LSP server in your editor, follow these steps:

1. **Install an LSP Client**: Install an LSP client extension for your editor (e.g., Visual Studio Code, Atom, Sublime Text).

2. **Configure the LSP Client**: Configure the LSP client to connect to the RequirementTracker LSP server. Refer to the documentation of your editor's LSP client for specific configuration instructions.

3. **Open Your Project**: Open your project in the editor. The LSP server will automatically detect the language from the file extension and parse the contents of multiline comments.

## Contributing

We welcome contributions to RequirementTracker! If you'd like to contribute, please follow these steps:

1. **Fork the Repository**: Fork the RequirementTracker repository to your GitHub account.
2. **Create a Branch**: Create a new branch for your feature or bug fix.
   ```sh
   git checkout -b my-feature-branch
   ```
3. **Make Changes**: Make your changes to the codebase.
4. **Commit Changes**: Commit your changes with a descriptive commit message.
   ```sh
   git commit -m "Add new feature"
   ```
5. **Push Changes**: Push your changes to your forked repository.
   ```sh
   git push origin my-feature-branch
   ```
6. **Create a Pull Request**: Create a pull request to merge your changes into the main repository.

## License

RequirementTracker is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
