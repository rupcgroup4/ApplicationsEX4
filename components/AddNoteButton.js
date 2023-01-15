import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
const AddNoteButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={{ marginBottom: 100, marginHorizontal: 100 }}
      onPress={() => navigation.navigate('AddNote')}
    >
      Add note +
    </Button>
  );
};

export default AddNoteButton;
