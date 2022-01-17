const res = require("express/lib/response");
const { updateBanner } = require("../controllers/banner");
const query = require("../query/banner");

const createBannerLogic = async (params) => {
  /**
   * validate params
   */

  try {
    const resultOfCreate = await query.createBannerData(params);
    return {
      status: 200,
      data: resultOfCreate,
    };
  } catch (err) {
    console.log(err.message);
    return {
      status: 401,
      data: err.message,
    };
  }
};

const getBannerLogic = async (countryCode) => {
  /**
   * country code
   */
  try {
    const bannerData = await query.getBannerData(countryCode);
    if (bannerData.length === 0 || !bannerData) {
      return {
        status: 200,
        data: "no banners for " + countryCode,
      };
    }
    return {
      status: 200,
      data: bannerData,
    };
  } catch (err) {
    return {
      status: 401,
      data: "malformed query",
    };
  }
};

const updateBannerLogic = async (tag, updates) => {
  const updateResult = await query.updateBannerData(tag);
  console.log(updateResult);
};

module.exports = { createBannerLogic, getBannerLogic, updateBannerLogic };
