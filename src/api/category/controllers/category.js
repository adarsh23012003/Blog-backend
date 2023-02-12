'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// ------ write your custom controller --------------------

module.exports = createCoreController("api::category.category", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::category.category").findOne({
      where: { slug: id },
      populate: {
        articles: true,
        attributes: true,
        thumbnail: true,
        authorImage: true,
        category: true,
        tag: true,
        image: true,
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));

// module.exports = createCoreController('api::category.category');
