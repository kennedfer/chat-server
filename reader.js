import axios from 'axios';

export const getMessagesJson = async()=>{
    let messagesObj;

    //MAKE ENVIROMENT VARIABLE
    await axios.get('https://kennedfer.github.io/chat-server/chat-messages.json')
    .then(function (response) {
        messagesObj=(response.data);
    })
    .catch(function (error) {
        console.error(error);
    })
    
    return messagesObj;
}

export const postMessagejson = async()=>{
    let messages = await getMessagesJson();
    console.log(messages);
    messages.messages.push("aasasasa")
}
// async function build(){
// console.log(await getMessagesJson());
// }

// build()