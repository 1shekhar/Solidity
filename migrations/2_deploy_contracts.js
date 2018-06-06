const etheraffleLOT     = artifacts.require("EtheraffleLOT")
    , etheraffleFreeLOT = artifacts.require("EtheraffleFreeLOT")
    , amt  = 100 // Init minting of the token for tests
    , addr = '0x627306090abab3a6e1400e9345bc60c78a8bef57' // Truffle's account[0]

module.exports = deployer => {
  deployer.deploy(etheraffleLOT, addr, amt)
  deployer.deploy(etheraffleFreeLOT, addr, amt)
}