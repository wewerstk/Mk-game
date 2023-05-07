import bridge from '@vkontakte/vk-bridge';
bridge.send("VKWebAppInit", {});


bridge.send("VKWebAppShowOrderBox", {type:"item", item:"item_id_123"});
// Подписка на событие-результат
 bridge.subscribe((e) = {
 if(e.type == 'VKWebAppShowOrderBoxResult') {
        console.log(e.data.status);
 }});