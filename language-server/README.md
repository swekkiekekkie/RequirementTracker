# RequirementTracker Language Server

## Introduction

The RequirementTracker Language Server is a language-agnostic server that provides support for controlled language comments/annotations placed inside multiline comments. It is implemented using the `vscode-languageserver` library and enhances the user experience by detecting the language from the file extension and parsing the contents of multiline comments.

## Features

- Language-agnostic support for controlled language comments/annotations
- Detection of language from file extension
- Parsing of multiline comments
- Handlers for basic LSP features like `initialize`, `textDocument/didOpen`, and `textDocument/didChange`

## Setup

To set up the RequirementTracker Language Server, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/swekkiekekkie/RequirementTracker.git
   cd RequirementTracker/language-server
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Build the project:
   ```sh
   npm run build
   ```

4. Start the language server:
   ```sh
   npm start
   ```

## Usage

To use the RequirementTracker Language Server, you need to configure your editor to connect to the language server. Here is an example configuration for Visual Studio Code:

1. Install the `vscode-languageclient` extension.

2. Add the following configuration to your `settings.json` file:
   ```json
   {
     "requirementtracker.languageServerPath": "/path/to/RequirementTracker/language-server/src/index.js"
   }
   ```

3. Restart Visual Studio Code.

## Benefits

The RequirementTracker Language Server provides several benefits:

- **Enhanced User Experience**: By detecting the language from the file extension and parsing the contents of multiline comments, the language server ensures that controlled language comments/annotations are handled correctly.
- **Language Agnosticism**: The language server supports multiple programming languages, making it versatile and adaptable to different development environments.
- **Improved Productivity**: With the language server handling controlled language comments/annotations, developers can focus on writing code without worrying about the specifics of comment syntax.

## Contributing

We welcome contributions to the RequirementTracker Language Server. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

The RequirementTracker Language Server is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more information.
