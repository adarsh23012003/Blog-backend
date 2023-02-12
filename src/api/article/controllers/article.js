'use strict';

/**
 * article controller
*/
const { createCoreController } = require('@strapi/strapi').factories;

// ------ write your custom controller --------------------

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::article.article").findOne({
      where: { slug: id },
      populate: { 
          thumbnail:true ,
          authorImage : true,
         category: true,
         tag:true,
        },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));



// module.exports = createCoreController('api::article.article');
