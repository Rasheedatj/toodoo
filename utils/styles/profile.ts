import { StyleSheet } from 'react-native';
import { appColors, deviceWidth } from '../constants/colors';

export const profileHomeStyles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    borderRadius: 12,
    padding: deviceWidth < 400 ? 15 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  article: {
    // width: deviceWidth < 400 ? '80%' : '65%',
    flex: 1,
  },

  articleHeader: {
    color: 'white',
    fontWeight: 'medium',
    fontSize: deviceWidth < 400 ? 15 : 18,
  },

  articleText: {
    marginTop: 3,
    color: 'white',
    fontSize: deviceWidth < 400 ? 12 : 13,
  },

  optionsContainer: {
    marginTop: deviceWidth < 400 ? 28 : 34,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: deviceWidth < 400 ? 20 : 27,
    borderRadius: 15,
  },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  icon: {
    borderWidth: 1,
    borderColor: appColors.primary,
    borderRadius: deviceWidth < 400 ? 12 : 14,
    width: deviceWidth < 400 ? 45 : 50,
    height: deviceWidth < 400 ? 45 : 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionArticle: {
    flex: 1,
    marginHorizontal: 20,
  },

  optionArticleText: {
    color: appColors['text-gray'],
    marginTop: deviceWidth < 400 ? 3 : 4,
  },
});
