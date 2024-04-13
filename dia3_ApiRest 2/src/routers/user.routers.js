const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/user.controller")


router.get("/media", usersCtrl.getUser);

router.get("/apuntadas", usersCtrl.getUser2);

router.get("/impartidas", usersCtrl.getUser3);
        
module.exports = router;


