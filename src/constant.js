export const funds = [
  {
    fundName: "Mantle Traders Funds",
    fundAddress: "0xEd48A72590d4406f80AE2010125cd80d47044c0d",
    aum: "$262,000",
    change: "+20%",
    aumChange: "+30%",
    description:
      "Think of it as advanced HODLing - a smarter, more strategic approach to investing in the world of cryptocurrency. With our Simple Rebalance Strategy, you can stay ahead of the game and build a portfolio that works for you.",
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
    fundName: "Meme Fund",
    fundAddress: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
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
    fundAddress: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
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
