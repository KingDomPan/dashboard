import EN from './i18n/en';
import CN from './i18n/cn';

export default function ($translateProvider) {
  $translateProvider.translations('en', EN);
  $translateProvider.translations('cn', CN);
  $translateProvider.preferredLanguage('en');
  $translateProvider.useLocalStorage();
};