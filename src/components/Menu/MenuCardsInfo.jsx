import { useTranslations } from 'next-intl';

const GetMenuCardsInfo = () => {
  const t = useTranslations('Menu');
  return [
    {
      name: `${t('menu_1')}`,
      image: '/images/menu.png',
      dish1: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish2: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish3: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      cardGradient: `var(--blueCardGradient)`,
      overlayGradient: `var(--blueOverlayGradient)`,
      hoverText: `${t('first.hoverText')}`,
    },
    {
      name: `${t('menu_2')}`,
      image: '/images/menu.png',
      dish1: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish2: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish3: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      cardGradient: `var(--redCardGradient)`,
      overlayGradient: `var(--redOverlayGradient)`,
      hoverText: `${t('second.hoverText')}`,
    },
    {
      name: `${t('menu_3')}`,
      image: '/images/menu.png',
      dish1: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish2: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      dish3: {
        title: `${t('dish')}`,
        description: `${t('description')}`,
        price: `${t('price')}`,
      },
      cardGradient: `var(--yellowCardGradient)`,
      overlayGradient: `var(--yellowOverlayGradient)`,
      hoverText: `${t('third.hoverText')}`,
    },
  {
    name: `${t('menu_4')}`,
    image: '/images/menu.png',
    dish1: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish2: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish3: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    cardGradient: `var(--yellowCardGradient)`,
    overlayGradient: `var(--yellowOverlayGradient)`,
    hoverText: `${t('third.hoverText')}`,
  },
  {
    name: `${t('menu_5')}`,
    image: '/images/menu.png',
    dish1: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish2: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish3: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    cardGradient: `var(--yellowCardGradient)`,
    overlayGradient: `var(--yellowOverlayGradient)`,
    hoverText: `${t('third.hoverText')}`,
  },
  {
    name: `${t('menu_6')}`,
    image: '/images/menu.png',
    dish1: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish2: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    dish3: {
      title: `${t('dish')}`,
      description: `${t('description')}`,
      price: `${t('price')}`,
    },
    cardGradient: `var(--yellowCardGradient)`,
    overlayGradient: `var(--yellowOverlayGradient)`,
    hoverText: `${t('third.hoverText')}`,
  },
]
};

export default GetMenuCardsInfo;