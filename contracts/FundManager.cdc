pub contract FundManager {

    pub struct Fund {
        pub var manager: Address
        pub var nfts: [UInt64]
        pub var funds: [UInt64]
    }

    pub var funds: {UInt64: Fund}

    pub event FundCreated(id: UInt64, manager: Address)
    pub event Invested(id: UInt64, investor: Address, amount: UFix64)

    // Mapping of user address to their balances
    pub var balances: {Address: {String: UFix64}} // Currency: balance

    // Function to allow users to deposit tokens
    pub fun deposit(currency: String, amount: UFix64) {
        let vaultRef = getAccount(self.account.address).getCapability<&{FungibleToken.Receiver}>(/public/#{currency}/deposit)
        let vault = vaultRef.borrow() ?? panic("Could not borrow reference to vault")
        let deposited = vault.deposit(from: self.account, amount: amount)

        // Update user's balance
        if let balance = self.balances[self.account]?.get(currency) {
            self.balances[self.account][currency] = balance + deposited
        } else {
            self.balances[self.account][currency] = deposited
        }
    }

    // Function for profit generation by fund manager
    pub fun generateProfit(id: UInt64) {
        let fund = self.funds[id]
        assert(fund.manager == self.account.address)

        // Calculate profit and transfer to the fund's manager
        let profit = UFix64(fund.funds.length) * 0.1
        let vaultRef = getAccount(self.account.address).getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)
        let vault = vaultRef.borrow() ?? panic("Could not borrow reference to vault")
        vault.withdraw(amount: profit)
    }

    // Function to create a new fund
    pub fun createFund(): UInt64 {
        let id = self.account.availableFunds.length
        let fund = Fund(manager: self.account.address, nfts: [], funds: [])
        self.funds[id] = fund
        self.emit(FundCreated(id: UInt64(id), manager: self.account.address))
        return UInt64(id)
    }

    pub fun trade(id: UInt64, nfts: [UInt64], funds: [UInt64]) {
        let fund = self.funds[id]
        assert(fund.manager == self.account.address)
        fund.nfts.append(contentsOf: nfts)
        fund.funds.append(contentsOf: funds)
    }

    pub fun invest(id: UInt64, amount: UFix64) {
        let fund = self.funds[id]
        assert(fund.manager != Address(0x0))

        // Make sure user has enough balance
        if let balance = self.balances[self.account]?.get("USDC") {
            assert(balance >= amount)
        } else {
            assert(false, message: "Insufficient balance")
        }

        // Transfer the funds from the user to the fund manager
        let vaultRef = getAccount(fund.manager).getCapability<&{FungibleToken.Receiver}>(/public/USDC/deposit)
        let vault = vaultRef.borrow() ?? panic("Could not borrow reference to vault")
        vault.deposit(from: self.account, amount: amount)

        // Update user's balance
        self.balances[self.account]["USDC"] = self.balances[self.account]?["USDC"]! - amount

        self.emit(Invested(id: UInt64(id), investor: self.account.address, amount: amount)

    // Add the invested amount to the fund's balance
    fund.funds.append(amount)
}
}