require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain unfold hidden clock flock gauge'; 
let testAccounts = [
"0xc84c9ddfe4ad63f9462f32bf02bd77c09a5cbad9b40c04a19ab6b5412a146d89",
"0x6f0321d265c7f466c6e656aee39db0378d0de0e3f6c70ec316bcd9eaeb254f04",
"0x2de3cca9425bcb84f20d25b1c2f796a249c354c7e2338dd20891aa48b702447f",
"0x474f8124810889f9d23ddd0f5a15b7dac5ff481e7ce7058660a0d11f7d95995c",
"0x02d963ee7b9fe4028f873d1fb40e5855bcb821ce5ba1984583cca0af648bc792",
"0xa2dc4608244e03a291b0fddb516a384ce362dbc13ac1b16f41ed7001f5c0f334",
"0x0ca5d63afd83314a18f15c09af3776c25fba6a4e130cb43f4d3c0f8d8afac443",
"0xd1a931af6523c7d559e58a21a8b3b1b9b93895152d5393f0cb148d1fee6a17b5",
"0x2b3e11f9cf1df8231e52cb12afa3f37354536f8b852e7a4aa203ce0b2490c46e",
"0x1c0818a975728cd56a0560a5d7b36636e7130e5034f35cd182bbfcbe29bdc003"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
