import { commonStyles } from '@/utils/styles/common';
import { SuccessProp } from '@/utils/types/UI';
import { Image, Text, View } from 'react-native';

const Success = ({ title, description, image }: SuccessProp) => {
  return (
    <View style={commonStyles.successContainer}>
      <View style={commonStyles.successImage}>
        {image ? (
          image
        ) : (
          <Image
            source={require('../assets/images/Successmark.png')}
            style={commonStyles.successImage}
          />
        )}
      </View>
      <View>
        <Text style={commonStyles.successTitle}>
          {title ? title : 'Success'}
        </Text>
        <Text style={commonStyles.successDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default Success;
