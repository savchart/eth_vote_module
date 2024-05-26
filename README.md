# Anonymous Voting Telegram Web Application

This is a Telegram Web Application (TWA) that allows for anonymous voting supported by Zero-Knowledge (ZK) technologies to verify emails. The application consists of a frontend developed with React and a backend using Node.js with Express. It also includes a Telegram bot for interaction.

## Features

- Anonymous voting
- Zero-Knowledge proof email verification
- Telegram bot integration
- Real-time results display

## Installation

### Prerequisites

- Node.js and npm
- Telegram account to create a bot

### Web application

To install:
```
cd votezkproof
# Compile the vote zk prover
nargo compile

cd voteui
pnpm install
./install.sh
```

To run it locally from the ```vote/voteui``` directory:
```
pnpm start
```
and use a browser to open ```http://localhost:3000```.