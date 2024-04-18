import {ReactNode} from 'react';
import {createTheme, MantineProvider as Mantine} from '@mantine/core';
import '@mantine/core/styles.css';
const theme = createTheme({
    // theme overrider here
});
// Export a functional component named MantineProvider
// This component wraps the MantineProvider component from Mantine
// It accepts a children prop of type ReactNode, which allows any valid React node to be passed as children
export default function MantineProvider({children}:{children:ReactNode}){
    return (
        <Mantine theme={theme}>
            {children}
        </Mantine>
    )
}