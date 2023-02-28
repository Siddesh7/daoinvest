export const funds = [
  {
    fundName: "Doodle Trader",
    fundAddress: "0xe51143c424cfd3fc",
    aum: "$26,000",
    change: "+20%",
    aumChange: "+30%",
    description: "Doodle only",
    allocation: [
      {
        asset: "Doodles",
        url: "https://flowty.mypinata.cloud/ipfs/QmVjzvfP67d8ThQFPd36yMngzLhbZxzeADFmBA5x8kCVfY",
      },
      {
        asset: "Doodles Purple Basketball Shoe",
        url: "https://flowty.mypinata.cloud/ipfs/Qmcy4detMgCXmYbv3FbKKbcac5AsZaatU5XgUy39Jsdtit",
      },
      {
        asset: "Doodles",
        url: "https://flowty.mypinata.cloud/ipfs/QmVjzvfP67d8ThQFPd36yMngzLhbZxzeADFmBA5x8kCVfY",
      },
    ],
  },
  {
    fundName: "Meme Fund",
    fundAddress: "0xb4fbf271143fsde",
    aum: "$2,000",
    change: "+5%",
    aumChange: "-20%",
    description: "Complete degen strategy",
    allocation: [
      {
        asset: "Inu",
        share: "50%",
        amount: 10000,
        value: "$1",
        total: "$1000",
      },
      {
        asset: "Doge",
        share: "50%",
        amount: 100000,
        value: "$0.1",
        total: "$1000",
      },
    ],
  },
  {
    fundName: "Large Cap Fund",
    fundAddress: "0x07865c6e87b9f70",
    aum: "$100,200",
    change: "+8%",
    aumChange: "+40%",
    description: "Diverse asset weightage in large cap assets ",
    allocation: [
      {
        asset: "Canto",
        share: "80%",
        amount: 100000,
        value: "$0.5",
        total: "$50000",
      },
      {
        asset: "Eth",
        share: "20%",
        amount: 30,
        value: "$1,675",
        total: "$50,200",
      },
    ],
  },
];

export function walletAddy(address) {
  return address.slice(0, 6) + "...." + address.slice(37, address.length - 1);
}
