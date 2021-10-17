const express = require("express");
const router = express.Router();
// const adminController = require("../controllers/adminController");
const authController=require("../controllers/authController")
const adminController = require("../controllers/productsController");
const isLoggedIn = require("../middlewares/user_auth");
const { route } = require("./users");

/* GET users listing. */
router.get("/products",isLoggedIn, adminController.ViewProducts);
router.get("/product/:productId", isLoggedIn, adminController.SingleProduct);
router.post(
  "/addProduct",
  isLoggedIn,
  adminController.AddToMulter,
  adminController.AddProducts
);

router.post(
  "/editProducts/:productId",
  isLoggedIn,
  adminController.AddToMulter,
  adminController.EditProducts
);

router.post(
  "/deleteProducts/:productId",
  isLoggedIn,
  adminController.DeleteProduct
);

// router
//   .route("/register")
//   .get((req, res) => res.render("admin/register"))
//   .post(authController.register);

router.route('/register')
.get((req,res)=>res.render('admin/register'))
.post(authController.register)

router.route('/login')
.get((req,res)=>res.render('admin/login'))
.post(authController.login)

router.get('/logout',authController.logout)
router.get('/test',(req,res)=>
{
    res.send(req.session);
})

router.get('/home',(req,res)=>
{
    res.send("testing home");
})


//Setting page for wholeseller
router.route('/setting')
.get(authController.renderForm)
.post(authController.postForm);


// router
//   .route("/login")
//   .get((req, res) => res.render("admin/login"))
//   .post(adminController.login);

// router.get("/logout", isLoggedIn, adminController.logout);


module.exports = router;
