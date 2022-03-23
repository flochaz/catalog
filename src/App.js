import { AmplifyProvider, View, Flex, useTheme, Divider, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter';
import { CategoryCardCollection, NavBar } from './ui-components';

const Example = () => {
  const { tokens } = useTheme();
  return (
    <View>
      <Flex direction="column" alignItems="center">
        <NavBar/>
        <Divider/>
        <CategoryCardCollection />
      </Flex>
    </View>
  )
}

export default function App() {
  return (
    <AmplifyProvider>
      <Authenticator>
      {({ signOut, user }) => (
      <Example />
      )}
      </Authenticator>
    </AmplifyProvider>
  )
}