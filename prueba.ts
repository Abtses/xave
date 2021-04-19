
export interface Asset {
    // The asset's token ID, or null if ERC-20
    tokenId: string | null,
    // The asset's contract address
    tokenAddress: string,
    // Optional for ENS names
    name?: string,
    // Optional for fungible items
    decimals?: number
  }