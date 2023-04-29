import ChatBot from 'react-simple-chatbot';
import Header from './header';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'I can help you find the best health policy',
        trigger: '1',
    },{
        id: '1',
        message:" What is your name",
        trigger: '2',
    },{
        id:'2',
        user: true,
        trigger:'3',
    },{
        id:'3',
        message:' hi {previousValue}, I will help you know more about the policy your looking at!',
        trigger:'4',
    },{
        id:'4',
        message:'Are you looking for a new policy or want to know wheter your conndition is covered in your current policy',
        trigger:'5'
    },
    {
        id:'5',
        options:[
            { value: 1, label: 'New policy',trigger:'6'},
            { value: 2, label: 'Know more about my current policy', trigger:'7' },
        ]
    },
    {
        id:'6',
        message:'great what is the budget your looking for'
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