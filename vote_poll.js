/*coded by Black Alpha
*/




const AlphaQueen = require('AlphaQueen-public');
const Alpha = AlphaQueen.events
const Build = AlphaQueen.build
const voteDB = AlphaQueen.voteDB
const _Alpha = AlphaQueen.voteSystem
const {MessageType} = require('5035550870:AAELNwaCBJMmCjXsF9S1GQ5CfptMchIL4xM');

const Language = require('../language');
const Lang = Language.getString('vote_poll');

Alpha.operate({pattern: 'setvote ?(/.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (AlphaMSG, input) => {
    await AlphaQueen.Alpha_setup()
    const vCreate = input[1]
    await _Alpha.setVotePoll( alphaMSG, vCreate, Lang )
}));

Alpha.operate({pattern: 'getvote', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (AlphaMSG) => {
    await AlphaQueen.alpha_setup()
    await _Alpha.getVotePoll( AlphaMSG, Lang )
}));

Alpha.operate({pattern: 'addVote ?(/.*)', fromMe: false,  deleteCommand: false, dontAddCommandList: true}, (async (AlphaMSG, input) => {
    await AlphaQueen.alpha_setup()
    const voteAdd = input[1]
    await _Alpha.addVotes( alphaMSG, voteAdd, Lang )
}));

Alpha.operate({pattern: 'vote ?(/.*)', fromMe: true,  deleteCommand: false, dontAddCommandList: true}, (async (AlphaMSG, input) => {
    const CMD = input[1]
    await _Alpha.voteCMD( alphaMSG, CMD, Lang )
}));