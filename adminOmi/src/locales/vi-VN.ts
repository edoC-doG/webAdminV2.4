import component from './vi-VN/component';
import globalHeader from './vi-VN/globalHeader';
import menu from './vi-VN/menu';
import pages from './vi-VN/pages';
import pwa from './vi-VN/pwa';
import settingDrawer from './vi-VN/settingDrawer';
import settings from './vi-VN/settings';

export default {
  'navBar.lang': 'Ngôn ngữ',
  'layout.user.link.help': 'Trợ giúp',
  'layout.user.link.privacy': 'Sự riêng tư',
  'layout.user.link.terms': 'Điều khoản',
  'app.copyright.produced': 'Produced by team',
  'app.preview.down.block': 'Tải trang này xuống local project',
  'app.welcome.link.fetch-blocks': 'Nhận được tất cả các khối',
  'app.welcome.link.block-list': 'Nhanh chóng xây dựng tiêu chuẩn, các trang dựa trên phát triển `khối`',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
