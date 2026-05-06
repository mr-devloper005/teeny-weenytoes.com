import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'aurora-mystic',
  navbar: 'compact-bar',
  footer: 'columns-footer',
  homeLayout: 'listing-home',
  motionPack: 'studio-stagger',
  primaryTask: 'listing',
  enabledTasks: ['listing', 'classified', 'article', 'image', 'profile', 'sbm', 'pdf'],
  taskLayouts: {
    listing: 'listing-directory',
    classified: 'classified-market',
    article: 'article-editorial',
    image: 'image-portfolio',
    profile: 'profile-business',
    sbm: 'sbm-curation',
    pdf: 'pdf-library',
  },
}
