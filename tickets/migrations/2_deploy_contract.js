const Ticket = artifacts.require('Ticket');

module.exports = function(deployer, network) {
    deployer.deploy(Ticket, 'one', 'two');
};