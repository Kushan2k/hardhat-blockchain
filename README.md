# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# My Hardhat Blockchain Project Documentation

Welcome to the documentation for My Hardhat Blockchain Project. This document provides an overview of the project's structure, setup, and usage.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Compiling Contracts](#compiling-contracts)
  - [Running Tests](#running-tests)
  - [Deploying Contracts](#deploying-contracts)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

My Hardhat Blockchain Project is a decentralized application (dApp) built using the Hardhat development environment. It involves smart contracts written in Solidity and various tools for development, testing, and deployment.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js 
- npm 
- Hardhat (version ^2.17.1)


### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/Kushan2k/hardhat-blockchain.git

2. navigate to the directory

    ```sh
    cd hardhat-blockchain
    ```
3. Install project dependencies:

    ```sh
      yarn install or npm install
    ```

## Project Structure
Explain the high-level structure of your project, including the directory layout, significant files, and their purposes.

## Usage
Compiling Contracts
To compile the smart contracts, run the following command:

```sh
yarn hardhat compile

```

## Running Tests
Execute the test suite using:
in a separate terminal run
```sh
yarn hardhat node
```
then run
```sh
yarn hardhat test --network localhost

```

## Deploying Contracts
Deploy the contracts to the Ethereum network:

```sh
npx hardhat run scripts/deploy.js --network <network_name>

```

## Configuration
Explain any configuration files, variables, or settings that the user might need to customize for their use case.

## Troubleshooting
Provide solutions to common issues that users might encounter during setup, compilation, testing, or deployment.

## Contributing
If you'd like to contribute to this project, follow these steps:

## Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Commit your changes: git commit -am 'Add a new feature'.
Push the branch: git push origin feature/your-feature-name.
Submit a pull request.

## License
This project is licensed under the MIT License.

## Happy coding