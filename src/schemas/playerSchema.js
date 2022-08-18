//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//

const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({

    steamID:{
        required: true,
        type: String,
    },
    name:{
        type: String
    },
    ips:{
        type: Array
    },
    country:{
        type: String
    },
    kills:{
        type:Number,
        default: 0
    },
    deaths:{
        type:Number,
        default: 0
    },
    shoots:{
        type:Number,
        default: 0
    },
    hits:{
        type:Number,
        default: 0
    },
    assits:{
        type:Number,
        default: 0
    },
    roundWin:{
        type:Number,
        default: 0
    },
    roundLose:{
        type:Number,
        default: 0
    },
    timePlay:{
        type:Number,
        default: 0
    },
    lastConnect:{
        type:String,
        default: 0
    },
    state:{
        type:String,
        default: "player"
    },
    adminRank:{
        type:String,
        default: null
    },
    totalBans:{
        type:String,
        default: null
    },
    warns:{
        type:String,
        default: 0
    },
    bans:{
        type:String,
        default: 0
    },
    reports:{
        type:String,
        default: 0
    },
    unbans:{
        type:String,
        default: 0
    },
    
    
});

module.exports = mongoose.model("players", playerSchema);
//---------------------------💔🚬 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ💔🚬---------------------------//