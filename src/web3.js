import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

export const createFund = async (fund) => {
  try {
    const txId = await fcl.send([
      fcl.transaction`
        import FundManager from 0x01cf0e2f2f715450

        transaction {
          let newFund: @FundManager.Fund

          prepare(acct: AuthAccount) {
            let fund <- FundManager.createEmptyFund()

            acct.save(<-fund, to: /storage/${fund.id})
            acct.link<&{FundManager.FundPublic}>(/public/${fund.id}, target: /storage/${fund.id})

            acct.borrow<&FundManager.Vault>(from: /storage/fundManagerVault)!.addFund(fund: <-fund)

            self.newFund = <-fund
          }

          post {
            self.newFund.borrow<&{FundManager.FundPublic}>().check()
          }
        }
      `,
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(100),
    ]);
    const result = await fcl.tx(txId).onceExecuted();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const investInFund = async (fundId, amount) => {
  try {
    const txId = await fcl.send([
      fcl.transaction`
        import FundManager from 0x01cf0e2f2f715450

        transaction(fundId: UInt64, amount: UFix64) {
          let fundRef: &FundManager.Fund{FundManager.FundPublic}
          let acctRef: &FundManager.FundAccount{FundManager.FundAccountPublic}

          prepare(acct: AuthAccount) {
            self.fundRef = acct.borrow<&FundManager.Fund>(from: /storage/${fundId})!
              .borrow<&FundManager.Fund{FundManager.FundPublic}>()
              ?? panic("Failed to borrow reference to fund contract")

            self.acctRef = self.fundRef.getAccount(acct: acct) as! &FundManager.FundAccount{FundManager.FundAccountPublic}
          }

          execute {
            self.acctRef.deposit(amount: amount)
          }
        }
      `,
      fcl.args([fcl.arg(fundId, t.UInt64), fcl.arg(amount, t.UFix64)]),
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(100),
    ]);
    const result = await fcl.tx(txId).onceExecuted();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
