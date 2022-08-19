//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
var express = require("express"),
  router = express.Router(),
  players = require("../src/schemas/playerSchema");

router.post("/newPlayer", async function (req, res) {
  
  const data = req.body;

  players.find(
    {
      steamID: data.steamid,
    },
    async function (err, item) {
      if (item.length < 1) {
        try {
          const newPlayer = await players.create({
            steamID: data.steamid,
            name: data.name,
            ips: data.ips,
            country: data.country,
            kills: data.kills,
            deaths: data.deaths,
            shoots: data.shoots,
            hits: data.hits,
            assits: data.assists,
            roundWin: data.roundWin,
            roundLose: data.roundLose,
            timeplay: data.timeplay,
            lastConnect: data.lastConnect,
            state: data.state,
            adminRank: data.adminRank,
            totalBans: data.totalBans,
            warns: data.warns,
            bans: data.bans,
            reports: data.reports,
            unbans: data.unbans,
          });
          console.log("[📓]New Player Record Saved.", data.steamid);
        } catch (error) {
          console.log("[❌]Failed To Save New Player.", error);
        }
        res.sendStatus(201);
      } else {
        res.sendStatus(208);
      }
    }
  );
});

router.post("/findPlayer", async function (req, res) {
  const data = await players.find({ steamID: req.body.steamid });
  res.status(302).json(data);
});

router.get("/players", async function (req, res) {
  const data = await players.find({});
  res.status(200).json(data);
});

router.get("/", async function (req, res) {
  res.status(401).json({ message: "Unauthorized" });
});

module.exports = router;
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//curl -i -X POST -H "Content-Type: application/json" -d "{\"steamid\": \"dick\", \"name\": \"Zer0Power\", \"ips\":["1","2","3"], \"country\": \"IR\", \"kills\": \"108555\", \"deaths\": \"461\", \"shoots\": \"313\", \"hits\": \"5461\", \"assists\": \"5415\", \"roundWin\": \"1\", \"roundLose\": \"0\", \"timeplay\": \"85\", \"lastconnect\": \"12115641\", \"state\": \"admin\", \"adminRank\": \"god\", \"totalBans\": \"185\", \"warns\": \"1\", \"bans\": \"1\", \"reports\": \"2\", \"unbans\": \"3\"}" http://localhost:1010/newPlayer
