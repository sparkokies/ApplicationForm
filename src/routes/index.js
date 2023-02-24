const { Router } =  require("express");
const {saveApplication, renderHome} = require("../controllers/application.controller");

const router = Router()

router.get('/', renderHome)
router.post('/form_action', saveApplication)

module.exports = router;