interface IThemes {
  [key: string]: ITheme
}

interface ITheme {
  [key: string]: string;
}

interface ISideMenuItem {
  label: string;
  img: string;
  path: string;
}

interface ISideMenuSection extends ISideMenuItem {
  children: ISideMenuItem[];
}

interface ISectionGame {
  title: string;
  image: string;
}

interface IGamesCarousel {
  icon: string;
  title: string;
  games: ISectionGame[];
}

interface IOption {
  label: string;
  value: string;
}

interface IGamesSearchItem {
  img: string;
  category: string;
  rtp: string;
  style: string;
  provider: string;
}