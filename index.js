import bridge from '@vkontakte/vk-bridge';
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}