import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const profileHomeStyles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  article: {
    width: '65%',
  },

  articleHeader: {
    color: 'white',
    fontWeight: 'medium',
    fontSize: 18,
  },

  articleText: {
    marginTop: 3,
    color: 'white',
    fontSize: 13,
  },

  optionsContainer: {
    marginTop: 34,
    borderColor: appColors.border,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 27,
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
    borderRadius: 14,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionArticle: {
    flex: 1,
    marginHorizontal: 20,
  },

  optionArticleText: {
    color: appColors['text-gray'],
    marginTop: 4,
  },
});
