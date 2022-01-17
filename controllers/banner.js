const logic = require("../logic/banner");

/**
 * function to check validity
 */

/**
 *
 * @param {http request} req
 * @param {http response} res
 */

const createBanner = async (req, res) => {
  const { body } = req;
  const result = await logic.createBannerLogic(body);
  res.status(result.status).json({ data: result.data });
};

/**
 *
 * @param {http request} req
 * @param {http response} res
 */

const getBanners = async (req, res) => {
  const { countryCode } = req.body;
  /* database query to get banners in a country code*/
  const result = await logic.getBannerLogic(countryCode);
  /* return the query res */
  res.status(result.status).json({ data: result.data });
};

/**
 *
 * @param {http request} req
 * @param {http response} res
 */

const updateBanner = (req, res) => {
  const { bannerTag } = req.body;
  logic.updateBannerLogic(bannerTag);
  //update database for the tag
  res.status(200).json({ message: "updated successfully" });
};

module.exports = { createBanner, getBanners, updateBanner };
