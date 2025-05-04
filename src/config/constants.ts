export const LOTTERY_ABI = [
  {
    "inputs": [
      {"internalType": "uint256", "name": "_initialTicketPriceETH", "type": "uint256"},
      {"internalType": "address", "name": "_feeWallet", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  // ... весь ваш ABI ...
  {"stateMutability": "payable", "type": "receive"}
] as const;
