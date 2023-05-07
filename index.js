import bridge from '@vkontakte/vk-bridge';
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
bridge.send('VKWebAppShowInviteBox', { 
       requestKey: 'key-12345' /* Необязательный параметр. Ключ приглашения. */
       })
       .then( (data) => {
         if (data.success) {
           // Приглашение выслано ...
           // ...
           
           // Эти пользователи не получили сообщение
           console.log('Приглашение не было отослано', data.notSentIds );
         }
       })
       .catch( (e) => { 
         let { error_code, error_reason } = e.error_data; 
         if( error_code == 4 && error_reason == 'User denied') {
           // Пользователь нажал «Отмена» в диалоге
           
         }  
       });