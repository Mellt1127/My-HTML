import threading
import time
from pynput.mouse import Button, Controller
from pynput.keyboard import Listener, KeyCode
TOGGLE_KEY = KeyCode.from_char('g')
TOGGLE_KEY = KeyCode.from_char('п')
CLICK_SPEED = 0.05
mouse = Controller()
clicking = False
def clicker():
    """Основной цикл кликера"""
    while True:
        if clicking:
            mouse.click(Button.left, 1)
        time.sleep(CLICK_SPEED)
def on_press(key):
    """Отслеживание нажатия клавиши G"""
    global clicking
    if key == TOGGLE_KEY:
        clicking = not clicking
        status = "ВКЛЮЧЕН" if clicking else "ВЫКЛЮЧЕН"
        print(f"Кликер {status}")
click_thread = threading.Thread(target=clicker)
click_thread.daemon = True
click_thread.start()
print(f"Программа запущена! Нажми '{TOGGLE_KEY.char.upper()}', чтобы начать или остановить.")
print("Чтобы полностью закрыть программу, просто закрой это окно.")
with Listener(on_press=on_press) as listener:
    listener.join()