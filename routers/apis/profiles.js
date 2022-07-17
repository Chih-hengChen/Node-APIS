// 注册和登录实现接口
const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');   // 引入model
const passport = require('passport');


// $route GET api/profiles/test
// @desc   返回请求的json数据
// @access public
router.get("/test", (req, res) => {
    res.json({
        msg: 'profile works'
    })
});

// $route POST api/profiles/add
// @desc   新增数据
// @access Private
router.post("/add", passport.authenticate('jwt', {session:false}), (req, res) => {
    const profileFields = {};
    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.description) profileFields.description = req.body.description;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expense) profileFields.expense = req.body.expense;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.date) profileFields.date = req.body.date;
    if (req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save()
                              .then(profile => {
                                res.json(profile);
                              })
})


// $route GET  api/profiles
// @desc   获取所有信息
// @access Private
router.get("/", passport.authenticate('jwt', {session:false}), (req, res) => {
    Profile.find()
           .then(profile => {
            if (!profile) return res.status(404).json('没有任何数据');

            res.json(profile);
           })
           .catch(err => res.status(404).json(err));
})


// $route GET  api/profiles/:id
// @desc   获取单条信息
// @access Private
router.get("/:id", passport.authenticate('jwt', {session:false}), (req, res) => {
    Profile.findOne({_id: req.params.id})
           .then(profile => {
            if (!profile) return res.status(404).json('没有任何数据');

            res.json(profile);
           })
           .catch(err => res.status(404).json(err));
})


// $route POST api/profiles/edit
// @desc   编辑数据
// @access Private
router.post("/edit/:id", passport.authenticate('jwt', {session:false}), (req, res) => {
    const profileFields = {};
    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.description) profileFields.description = req.body.description;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expense) profileFields.expense = req.body.expense;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.date) profileFields.date = req.body.date;
    if (req.body.remark) profileFields.remark = req.body.remark;

    Profile.findOneAndUpdate(
        {_id: req.params.id},
        {$set: profileFields},
        {new: true}
    ).then(profile => res.json(profile))
})



// $route DELETE  api/delete/:id
// @desc   获取单条信息
// @access Private
router.delete("/delete/:id", passport.authenticate('jwt', {session:false}), (req, res) => {
    Profile.findOneAndRemove({_id: req.params.id})
           .then(profile => {
            profile.save()
                   .then(profile => res.json(profile));
           })
           .catch(err => res.status(404).json('删除失败'));

})
module.exports = router;
