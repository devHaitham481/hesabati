"use strict";

const { offers } = require("../models");

exports.findAll = async (req, res, next) => {
  try {
    // pass in default limit and page if not defined
    const limit = req.query.limit != undefined ? parseInt(req.query.limit) : 10;
    const page = req.query.page != undefined ? parseInt(req.query.page) : 1;

    // remove limit and page key from object req
    delete req.query["limit"];
    delete req.query["page"];

    const data = await offers.findAndCountAll({
      where: req.query,
      limit,
      offset: limit * page - limit,
    });

    res.send({
      msg: "offers fetched",
      data: data.rows,
      page: page,
      limit: limit,
      total_page: Math.ceil(data.count / limit),
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const data = await offers.findByPk(req.params.id);
    res.send({ msg: "offers fetched", data: data });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await offers.create(req.body);
    res.send({
      msg: "offers created",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const data = await offers.update(req.body, {
      where: { id: req.params.id },
    });
    res.send({
      msg: "offers updated",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const data = await offers.destroy({
      where: { id: req.params.id },
    });
    res.send({
      msg: "offers deleted",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
