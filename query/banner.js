const { updateBanner } = require("../controllers/banner");
const Banner = require("../model/banner.md");

/**
 * get all banner data if no country code
 * else provide banner with that county code
 * @param {*} countryCode
 * @returns {object}
 */
const getBannerData = async (countryCode) => {
  let query = {};
  if (countryCode) {
    query = { countryCode };
  }
  try {
    const bannerQuery = await Banner.find(query).lean(true);
    //console.log(bannerQuery);
    return bannerQuery;
  } catch (err) {
    throw err;
  }
};

/**
 * create a banner
 * @param {object} params
 * @returns {object}
 */
const createBannerData = async (params) => {
  try {
    const bannerDoc = await Banner.create(params);
    return { bannerid: bannerDoc._id };
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {*} tag
 */
const updateBannerData = async (tag) => {
  try {
    const updateForBanner = await Banner.findOne({ tag }).lean(true);
    return updateForBanner;
  } catch (err) {
    throw err;
  }
};

module.exports = { createBannerData, getBannerData, updateBannerData };
