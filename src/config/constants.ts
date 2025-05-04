export const CONTRACT_ADDRESS = "0x6927648b3114B8B54FA5476Ec3BC3A52f1ab513B" as `0x${string}`;

export const LOTTERY_ABI = [
  {
    "inputs": [
      {"internalType": "uint256", "name": "_initialTicketPriceETH", "type": "uint256"},
      {"internalType": "address", "name": "_feeWallet", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "roundIndex", "type": "uint256"}
    ],
    "name": "RoundCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "roundIndex", "type": "uint256"},
      {"indexed": false, "internalType": "address", "name": "winner", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "prize", "type": "uint256"}
    ],
    "name": "RoundEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "roundIndex", "type": "uint256"}
    ],
    "name": "RoundStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "buyer", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "roundIndex", "type": "uint256"},
      {"indexed": false, "internalType": "uint32", "name": "tickets", "type": "uint32"}
    ],
    "name": "TicketsPurchased",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "uint32", "name": "_tickets", "type": "uint32"}
    ],
    "name": "buyTickets",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancelRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentRoundIndex",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feePercent",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeWallet",
    "outputs": [
      {"internalType": "address", "name": "", "type": "address"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentRoundInfo",
    "outputs": [
      {"internalType": "uint256", "name": "startTime", "type": "uint256"},
      {"internalType": "uint256", "name": "endTime", "type": "uint256"},
      {"internalType": "uint256", "name": "prizePool", "type": "uint256"},
      {"internalType": "uint256", "name": "participantsCount", "type": "uint256"},
      {"internalType": "bool", "name": "active", "type": "bool"},
      {"internalType": "bool", "name": "canceled", "type": "bool"},
      {"internalType": "address", "name": "winner", "type": "address"},
      {"internalType": "uint256", "name": "prizeAmount", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "roundIndex", "type": "uint256"},
      {"internalType": "uint256", "name": "participantIndex", "type": "uint256"}
    ],
    "name": "getParticipantInfo",
    "outputs": [
      {"internalType": "address", "name": "wallet", "type": "address"},
      {"internalType": "uint32", "name": "tickets", "type": "uint32"},
      {"internalType": "uint64", "name": "ticketFrom", "type": "uint64"},
      {"internalType": "uint64", "name": "ticketTo", "type": "uint64"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {"internalType": "address", "name": "", "type": "address"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePoolPercent",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "name": "rounds",
    "outputs": [
      {"internalType": "uint256", "name": "startTime", "type": "uint256"},
      {"internalType": "uint256", "name": "endTime", "type": "uint256"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isCanceled", "type": "bool"},
      {"internalType": "uint256", "name": "totalTickets", "type": "uint256"},
      {"internalType": "uint256", "name": "prizePool", "type": "uint256"},
      {"internalType": "address", "name": "winner", "type": "address"},
      {"internalType": "uint256", "name": "prizeAmount", "type": "uint256"},
      {"internalType": "uint256", "name": "participantsCount", "type": "uint256"},
      {"internalType": "bytes32", "name": "randomnessSeed", "type": "bytes32"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_prizePercent", "type": "uint256"},
      {"internalType": "uint256", "name": "_feePercent", "type": "uint256"}
    ],
    "name": "setDistributionPercents",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_newWallet", "type": "address"}
    ],
    "name": "setFeeWallet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_newPrice", "type": "uint256"}
    ],
    "name": "setTicketPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketPriceETH",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_newOwner", "type": "address"}
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;

export const BASE_RPC_URL = "https://mainnet.base.org";
export const BASE_CHAIN_ID = 8453;
export const TICKET_PRICE_DECIMALS = 18;
