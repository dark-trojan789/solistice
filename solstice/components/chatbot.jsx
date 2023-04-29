import ChatBot from 'react-simple-chatbot';
import Header from './header';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'I can help you find the best health policy',
    },{
        id: '1',
        message:" What is your name",
    }
];
const theme = {
    background: '#6D5D6E',
    headerBgColor: '#6D5D6E',
    headerFontSize: '20px',
    botBubbleColor: '#F4EEE0',
    headerFontColor: 'white',
    botFontColor: 'grey',
    userBubbleColor: '#d1b77b',
    userFontColor: 'dark grey',
};
 
function Chat() {
    return (
        <div className="App">
            <Header/>
            <div className='Chat'>
                <ThemeProvider theme={theme}>
                    <ChatBot headerTitle="Best policy "
                        steps={steps}
                    />
                </ThemeProvider>
            </div>
            
        </div>
    );
}
 
export default Chat;